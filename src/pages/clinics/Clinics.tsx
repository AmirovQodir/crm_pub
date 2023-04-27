import { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ContentHeader } from "../../components/content-header/ContentHeader";
import { MainPagination } from "../../components/pagination";
import { ClinicsList } from "../../features/clinics/components";
import { MainBreadcrumb } from "../../components/main-breadcrumb";
import { ContentHeaderContext, IContentHeader } from "../../common/contexts";

export const Clinics: FC = () => {
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { t } = useTranslation()
    const onChange = (data: any) => {
        console.log('pagination: ', data);
    }

    useEffect(() => {
        setLabel(t('clinics'))
    }, [])

    return <div className="pages">
        <ContentHeader>
            <MainBreadcrumb lastItem={{key: 'clinics', title: t('clinics')}} />
            <div></div>
            <MainPagination onChange={onChange} />
        </ContentHeader>
        <div className="pages__content">
            <ClinicsList/>
        </div>
    </div>
}