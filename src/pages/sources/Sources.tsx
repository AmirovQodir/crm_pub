import { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ContentHeader } from "../../components/content-header/ContentHeader";
import { MainPagination } from "../../components/pagination";
import { SourcesList } from "../../features/sources/components";
import { MainBreadcrumb } from "../../components/main-breadcrumb";
import { ContentHeaderContext, IContentHeader } from "../../common/contexts";

export const Sources: FC = () => {

    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { t } = useTranslation()
    const onChange = (data: any) => {
        console.log('pagination: ', data);
    }

    useEffect(() => {
        setLabel(t('sources_agency'))
    }, [])
    
    return <div className="pages">
        <ContentHeader>
            <MainBreadcrumb lastItem={{key: 'sources_agency', title: t('sources_agency')}} />
            <div></div>
            <MainPagination onChange={onChange} />
        </ContentHeader>
        <div className="pages__content">
            <SourcesList/>
        </div>
    </div>
}