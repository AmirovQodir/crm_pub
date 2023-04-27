import { FC, useState } from "react";
import { CheckOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";

import { UpIcon } from "../../../common/icons/upIcon";
import './styles.scss';

interface IInputDropdownProps {
    onChange: (selectedValue: string | string[] | null) => void;
    onClose: () => void;
    options: { value: any, label: string }[];
    styles?: { width: string }
    multiple?: boolean;
}

export const InputDropdown: FC<IInputDropdownProps> = ({ onChange, options, multiple = false, styles, onClose }) => {
    const [values, setValues] = useState<any[]>([]);
    const {t} = useTranslation();
    const handleChange = (value: any) => {
        let newValue: any = [];
        if (multiple) {
            if (values.includes(value)) {
                newValue = values.filter(item => item !== value);
            }
            else {
                newValue = [...values, value];
            }
            onChange(newValue)
        } else {
            if (values.length && values.includes(value)) {
                newValue = [];
            } else {
                newValue = [value];

            }
            onChange(newValue[0])
        }
        setValues(newValue)
    };

    const checkForSelected = (value: any): boolean => values.includes(value);

    return <div className="dropdown" style={styles}>
        <div className="dropdown__header dropdown__item rounded" onClick={onClose}>
            <button onClick={onClose}>
                                <span className="label">Все</span>
                            </button>
            <div className="icon">
            <UpIcon />
            </div>
        </div>
        <div className="dropdown__content">
            <ul className="dropdown__items">
                {
                    options.map((option, index) => (
                        <li key={index} className={`dropdown__item ${checkForSelected(option.value) ? 'selected' : ''}`}>
                            <button onClick={() => handleChange(option.value)}>
                                <span className="label">{t(option.label)}</span>
                            </button>
                            <span className="icon">
                                <CheckOutlined />
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
}
