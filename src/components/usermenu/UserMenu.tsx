import { FC } from "react";
import { DownIcon } from "../../common/icons/DownIcon";
import { Dropdown, MenuProps } from "antd";
import { LogoutOutlined, } from "@ant-design/icons";

import { useLogout } from "../../features/auth/hooks/useLogout";
import userAvatar from '../../../assets/images/user-avatar.svg'
import './styles.scss';


export const UserMenu: FC = () => {
    const { handleLogout } = useLogout()
    const items: MenuProps['items'] = [
        {
          label: 'Logout',
          key: 'logout',
          icon: <LogoutOutlined />
        },
      ];
      const onClick: MenuProps['onClick'] = ({ key }) => {
        handleLogout();
      }
    return (
        <Dropdown menu={{ items, onClick }} trigger={['click']}>

            <div className="user-menu">
                <div className="user-menu__avatar">
                    <div className="user-menu__imagebox">
                        <img className="user-menu__image" src={userAvatar} alt="user-avatar"></img>
                    </div>
                </div>
                <button className="user-menu__button btn">
                    <DownIcon></DownIcon>
                </button>
            </div>
        </Dropdown>
    );
}