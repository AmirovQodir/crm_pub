import { FC, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import {
    MenuOutlined,
} from '@ant-design/icons';
import { Button, Layout } from 'antd';

// import  contrastedLogoPath from "../../assets/images/logo-contrasted.png";
import './styles.scss';
import { MainMenu } from "../components/mainmenu";
import { Filters } from "../components/filters";
import { MainHeader } from "../components/mainheader";
import { withAuthorized } from "../features/auth/hocs";
import { ISidebarContext, SidebarContext } from "../common/contexts";
import { contrastedLogoPath } from "../common/utils/config";

const { Sider, Content } = Layout;

export const DashboardBase: FC = withAuthorized(() => {
    const {collapsed, setCollapsed} = useContext(SidebarContext) as ISidebarContext;

    return (
        <Layout>

            <Sider width={342} trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }} className={`${collapsed ? 'collapsed' : ''}`}>
                <div className={`sidebar__header ${collapsed ? 'collapsed' : ''} `} >
                    {!collapsed ? <img className="sidebar__header--logo" src={contrastedLogoPath} alt="site-logo" /> : null}
                    <Button type="text" className="sidebar__header--button" size="middle" onClick={() => setCollapsed(!collapsed)}>
                        <MenuOutlined />
                    </Button>
                </div>
                <div className="main-menu">
                    <MainMenu collapsed={collapsed} />
                </div>
                <div className="divider"></div>
                <div className="main-filters">
                    <Filters collapsed={collapsed} />
                </div>
            </Sider>

            <Layout className="site-layout">
                <MainHeader collapsed={collapsed} />
                <Content
                >
                    <Outlet />
                </Content>
            </Layout>

        </Layout>
    );
});