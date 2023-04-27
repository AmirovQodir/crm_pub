import { FC } from "react";
import { BellIcon } from "../../common/icons/BellIcon";

import './styles.scss';

export const Notification: FC = () => {
    return <div className="notification">
        <button className="notification__btn"><BellIcon/></button>
    </div>
}