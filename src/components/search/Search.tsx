import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { SearchIcon } from "../../common/icons/SearchIcon";
import { InputDropdown } from "../inputs/input-dropdown";
import { SEARCH_DROPDOWN } from "../../common/constants";
import { DownIcon } from "../../common/icons/DownIcon";
import './styles.scss';

interface ISearchProps {
    hasToggle: boolean;
    onChange: (searchValue: any) => void;
}

export const Search: FC<ISearchProps> = ({ onChange, hasToggle }) => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    const handleDropdown = (values: any) => {
        console.log(values);
    }

    return <div className="search">
        <div className="search__content" onClick={() => inputRef.current?.focus()}>
            <div className="icon"><SearchIcon /></div>
            <input ref={inputRef} className="input" value={value} type="text" placeholder={t('search') || ''} onChange={handleChange} />
            {hasToggle && <div className="toggle">
                <button className="toggle__button" onClick={() => setOpen(!open)}>
                    <DownIcon />
                </button>
                <div className={`toggle__content ${open ? 'open' : ''}`}>
                    <InputDropdown
                        onClose={() => setOpen(false)}
                        onChange={handleDropdown}
                        options={SEARCH_DROPDOWN}
                        multiple={true}
                        styles={{ width: '320px' }}
                    />
                </div>
            </div>}
        </div>
    </div>
}