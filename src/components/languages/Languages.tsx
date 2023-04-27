import { FC, useState } from "react";
import { DownIcon } from "../../common/icons/DownIcon";
import './styles.scss'
import { useTranslation } from "react-i18next";

const items = [
    {
        label: 'Russian',
        key: 'ru',
    },
    {
        label: 'Korean',
        key: 'kr',
    },
    {
        label: 'English',
        key: 'en',
    },
];

export const Languages: FC = () => {

    const {t, i18n} = useTranslation();

    const [open, setOpen] = useState(false);

    const onClick = (values: string) => {
        i18n.changeLanguage(values)
        setOpen(false)
    }

    return <div className="languages">
        <div className={`languages__content ${open ? 'open': ''}`}>
            <div className="languages__trigger">
                <div>
                    <button onClick={() => setOpen(!open)} className="languages__btn languages__btn--1">
                        <span>{t('current_lang')}</span>
                        <span className="icon"><DownIcon/></span>
                    </button>
                </div>
                <div className="languages__buttons">
                    {items.map(item => (
                        <button onClick={() => onClick(item.key)} key={item.key} className="languages__btn languages__btn--2">
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
}