import { FC, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Tabs } from "antd";

import { ContentHeader } from "../../components/content-header/ContentHeader"
import { MainBreadcrumb } from "../../components/main-breadcrumb"
import { ISidebarContext, SidebarContext } from "../../common/contexts";
import { PatientForm, ProcessForm } from "../../features/patients/components";
import './styles.scss';
import { useParams } from "react-router-dom";

enum PatientTabsEnum {
    ALL_INFO = 'ALL_INFO',
    PROCESS = 'PROCESS'
}

export const Patient: FC = () => {

    const [patientName, setPatientName] = useState('Борисова Ольга');

    const { id } = useParams()
    const { t } = useTranslation();
    const { setCollapsed } = useContext(SidebarContext) as ISidebarContext;
    const [tab, setTab] = useState<PatientTabsEnum>(PatientTabsEnum.ALL_INFO);

    const items = [
        {
            key: PatientTabsEnum.ALL_INFO,
            label: t('all_info')
        },
        {
            key: PatientTabsEnum.PROCESS,
            label: t('process')
        }
    ];

    useEffect(() => {
        setCollapsed(true);
        return () => setCollapsed(false);
    }, []);

    return <div className="page">
        <ContentHeader hasBackAction={true}>
            <MainBreadcrumb
                lastItem={{ key: 'patient', title: id ? patientName : `${t('create')} ${t('patient').toLowerCase()}` }}
            />
            <div></div>
            <div></div>
            <div></div>
        </ContentHeader>
        <div className="page__content">
            <Tabs items={items}
                defaultActiveKey={PatientTabsEnum.ALL_INFO}
                onChange={(key) => setTab(key as PatientTabsEnum)}
            />
            {
                tab === PatientTabsEnum.ALL_INFO ?
                    <PatientForm /> :
                    <ProcessForm />
            }
        </div>
    </div>
}