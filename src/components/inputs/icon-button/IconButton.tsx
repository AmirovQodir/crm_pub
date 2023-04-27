import { FC } from "react";
import './styles.scss';

interface IButtonProps {
    icon: FC;
    onClick: () => void;
    label: string
}

export const IconButton: FC<IButtonProps> = ({ icon: Icon, label, onClick }) => {
    return <button className="button" onClick={onClick}>
        <div className="button__content">
            <span className="button__icon">
                <Icon />
            </span>
            <span className="button__label">{label}</span>
        </div>
    </button>
}