import { FC, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom";
import { Tabs } from "antd";

import { ContentHeader } from "../../components/content-header/ContentHeader"
import { MainBreadcrumb } from "../../components/main-breadcrumb"
import { ISidebarContext, SidebarContext } from "../../common/contexts";
import { ClinicForm } from "../../features/clinics/components/clinic-form/ClinicForm";

enum TabsEnum {
    ADD_INFO = 'ADD_INFO',
}

export const Clinic: FC = () => {

    const [clinicName, setClinicName] = useState('St. Mary’s Hospital');

    const { id } = useParams()
    const { t } = useTranslation();
    const { setCollapsed } = useContext(SidebarContext) as ISidebarContext;
    const [tab, setTab] = useState<TabsEnum>(TabsEnum.ADD_INFO);

    const items = [
        {
            key: TabsEnum.ADD_INFO,
            label: t('add_info')
        },
    ];

    useEffect(() => {
        setCollapsed(true);
        return () => setCollapsed(false);
    }, []);

    return <div className="page">
        <ContentHeader hasBackAction={true}>
            <MainBreadcrumb
                lastItem={{ key: 'clinic', title: id ? clinicName : `${t('add')} ${t('clinic').toLowerCase()}` }}
            />
            <div></div>
            <div></div>
            <div></div>
        </ContentHeader>
        <div className="page__content">
            <Tabs items={items}
                defaultActiveKey={TabsEnum.ADD_INFO}
                onChange={(key) => setTab(key as TabsEnum)}
            />
            {
                tab === TabsEnum.ADD_INFO ? <ClinicForm /> : null
            }
        </div>
    </div>
}