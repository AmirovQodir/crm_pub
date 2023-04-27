import { Menu } from "antd";
import { FC } from "react";
import { HomeIcon } from "../../common/icons/HomeIcon";
import { useTranslation } from "react-i18next";
import { ROUTE_CLINICS, ROUTE_COORDINATORS, ROUTE_PATIENTS, ROUTE_SOURCES } from "../../common/constants";
import { useNavigate } from "react-router-dom";

export const MainMenu: FC<{collapsed: boolean}> = ({collapsed}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const items = [
        {
            key: '1',
            icon: <HomeIcon />,
            label: t('menu'),
            children: [
                {
                    key: ROUTE_PATIENTS,
                    label: t('patients'),
                },
                {
                    key: ROUTE_CLINICS,
                    label: t('clinics'),
                },
                {
                    key: ROUTE_SOURCES,
                    label: t('sources'),
                },
                {
                    key: ROUTE_COORDINATORS,
                    label: t('coordinators'),
                },
            ]
        },
    ]

    const onSelect = (selectedMenu: {key: string, selectedKeys: string[], keyPath: string[]}) => {
        navigate(selectedMenu.key)
    }

    return <Menu
        expandIcon={''}
        theme="dark"
        mode="inline"
        defaultOpenKeys={['1']}
        openKeys={collapsed ? undefined : ['1']}
        items={items}
        onSelect={onSelect}
    />
}