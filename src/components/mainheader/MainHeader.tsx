import { Layout } from "antd";
import { FC, useEffect, useState } from "react";

import './styles.scss';
// import siteLogoPath from "../../../assets/images/logo.png";
import { IconButton } from "../inputs";
import { PlusIcon } from "../../common/icons/PlusIcon";
import { SettingsIcon } from "../../common/icons/SettingsIcon";
import { Search } from "../search/Search";
import { Notification } from "../notification";
import { Languages } from "../languages/Languages";
import { UserMenu } from "../usermenu/UserMenu";
import { useTranslation } from "react-i18next";
import { useMatch, useNavigate } from "react-router-dom";
import { ROUTE_CLINICS, ROUTE_COORDINATORS, ROUTE_CREATE, ROUTE_PATIENTS, ROUTE_SOURCES } from "../../common/constants";
import { siteLogoPath } from "../../common/utils/config";

const { Header } = Layout;

export const MainHeader: FC<{ collapsed: boolean }> = ({ collapsed }) => {

    const navigate = useNavigate();
    const [createLabel, setCreateLabel] = useState('patient');
    const [addLabel, setAddLabel] = useState('add');
    const [hasToggle, setHasToggle] = useState(false);
    const match = useMatch(":parentPath/*")?.params['*'];

    useEffect(() => {
        setHasToggle(false);
        setAddLabel('add');
        if (match?.includes(ROUTE_CLINICS)) {
            setCreateLabel('clinic');
            return;
        }
        if (match?.includes(ROUTE_SOURCES)) {
            setCreateLabel('source_or_agency');
            return;
        }
        if (match?.includes(ROUTE_COORDINATORS)) {
            setCreateLabel('coordinator');
            return;
        }
        if (match?.includes(ROUTE_PATIENTS)) {
            setCreateLabel('patient');
            setHasToggle(true); // search toggle should appear only patients page
            setAddLabel('create') // create label only patients page
            return;
        }
    }, [match])

    const navigateToCreate = () => {
        navigate(`${match?.split('/')[0]}/${ROUTE_CREATE}`)
    }

    const { t } = useTranslation();
    return <Header className="main-header" >
        <div className="main-container">
            <div className="header-row">
                <div className={!collapsed ? 'collapsed' : ''}>
                    <img className="second-logo" src={siteLogoPath} />
                </div>
                <div className="header-actions">
                    <div className="header-buttons">
                        <IconButton 
                            icon={PlusIcon} 
                            label={`${t(addLabel)} ${t(createLabel).toLowerCase()}`} 
                            onClick={navigateToCreate}
                        />
                        <IconButton icon={SettingsIcon} label={t('settings')} onClick={() => console.log('click')} />
                    </div>
                    <div className="header-right">
                        <div className="searchbar"><Search onChange={(value) => console.log(value)} hasToggle={hasToggle} /></div>
                        <div className="user-action">
                            <Notification />
                            <Languages />
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-row"></div>
        </div>
    </Header>
}