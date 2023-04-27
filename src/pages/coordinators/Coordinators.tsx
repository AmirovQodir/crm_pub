import { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ContentHeader } from "../../components/content-header/ContentHeader";
import { MainPagination } from "../../components/pagination";
import { CoordinatorsList } from "../../features/coordinators/components";
import { MainBreadcrumb } from "../../components/main-breadcrumb";
import { ContentHeaderContext, IContentHeader } from "../../common/contexts";

export const Coordinators: FC = () => {
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { t } = useTranslation()
    const onChange = (data: any) => {
        console.log('pagination: ', data);
    }

    useEffect(() => {
        setLabel(t('coordinators'))
    }, [])

    return <div className="pages">
        <ContentHeader>
            <MainBreadcrumb lastItem={{key: 'coordinators', title: t('coordinators')}} />
            <div></div>
            <MainPagination onChange={onChange} />
        </ContentHeader>
        <div className="pages__content">
            <CoordinatorsList />
        </div>
    </div>
}