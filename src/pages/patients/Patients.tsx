import { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ContentHeader } from "../../components/content-header/ContentHeader";
import { SORT_ENUM, Sort } from "../../components/sort/Sort";
import { PatientsDnd, PatientsList } from "../../features/patients/components";
import { MainPagination } from "../../components/pagination";
import { MainBreadcrumb } from "../../components/main-breadcrumb";
import { ContentHeaderContext, IContentHeader } from "../../common/contexts";
import './styles.scss';

export const Patients: FC = () => {
    const [sort, setSort] = useState(SORT_ENUM.HORIZONTAL);
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { t } = useTranslation()
    const onChange = (data: any) => {
        console.log('pagination: ', data);
    }

    useEffect(() => {
        setLabel(t('patients'))
    }, [])

    return <div className="pages">
        <ContentHeader>
            <MainBreadcrumb lastItem={{key: 'patients', title: t('patients')}} />
            <Sort onChange={(value) => setSort(value)} current={sort}/>
            <MainPagination onChange={onChange} />
        </ContentHeader>
        <div className="pages__content">
            {
                sort === SORT_ENUM.HORIZONTAL ? <PatientsList/> : <PatientsDnd/>
            }
        </div>
    </div>
}