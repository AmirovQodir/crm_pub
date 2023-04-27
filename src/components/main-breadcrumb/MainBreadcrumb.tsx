import { Breadcrumb } from "antd";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

import './styles.scss';

export const MainBreadcrumb: FC<{ lastItem: ItemType }> = ({ lastItem }) => {

    const { t } = useTranslation()
    const location = useLocation()

    const paths = location.pathname.split('/').slice(1, -1);

    let breadcrumbItems: ItemType[] = useMemo(() => paths.map((path, index) => {
        return ({
            key: path,
            title: <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{t(path)}</Link>
        })
    }), [])

    return <Breadcrumb className="main-breadcrumb" items={lastItem ? [...breadcrumbItems, lastItem] : breadcrumbItems} />
}