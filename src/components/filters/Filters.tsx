import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FILTER_CONSTANTS } from "../../common/constants";
import { FilterIcon } from "../../common/icons/FilterIcon";
import { CheckboxController } from "../inputs";

import './styles.scss';
import { useTranslation } from "react-i18next";

export const Filters: FC<{ collapsed: boolean }> = ({ collapsed }) => {

    const {t} = useTranslation();
    const { control, setValue, watch, getValues } = useForm({ defaultValues: {} })

    useEffect(() => {
        // console.log('get values', getValues());
    }, [watch()])

    return <div className={`filters ${collapsed ? 'collapsed' : ''}`}>
        <div className="filters__title">
            <div className="filters_icon"><FilterIcon /></div>
            <div className="filters__title__content">{t('filters')}</div>
        </div>
        <div className="filters__checkboxes">
            {
                FILTER_CONSTANTS.map(filter => (
                    <div className="checkboxes" key={filter.value}>
                        <div className="checkboxes__title">{t(filter.label)}</div>
                        <div className="checkboxes_items">
                            {filter?.children?.length && filter?.children
                            ?.map(child => (<div className="checkboxes__item" key={child.value}>
                                <CheckboxController
                                    key={child.value}
                                    setValue={setValue}
                                    control={control}
                                    name={child.value}
                                    label={t(child.label) || ''}
                                />
                            </div>))}
                        </div>
                    </div>))
            }
        </div>
    </div>
}