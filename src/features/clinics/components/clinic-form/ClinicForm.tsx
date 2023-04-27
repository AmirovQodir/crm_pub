import { FC, useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { TextFieldController } from "../../../../components/inputs/text-filed-controller";
import { useClinicForm } from "../../hooks";
import { ContentHeaderContext, IContentHeader } from "../../../../common/contexts";
import { FIELD_CITY, FIELD_CLINIC_NAME, FIELD_COORDINATOR_NAME, FIELD_PHONE } from "../../../../common/constants";

export const ClinicForm: FC = () => {
    const { id } = useParams()
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { control, handlePatientForm, isLoading, resetValues, handleReset } = useClinicForm()
    const navigate = useNavigate()

    useEffect(() => {
        if(id) {
            resetValues(CLINIC_MOCK);
            setLabel(CLINIC_MOCK.clinic_name)
        } else {
            setLabel(`${t('add')} ${t('clinic').toLowerCase()}`)
            handleReset()
        }
    }, [id])

    const { t } = useTranslation();

    return <form onSubmit={handlePatientForm} className="form-container">

        <div className="form-inputs">
            <div>

                <div className="mb-4">
                    <TextFieldController control={control}
                        placeholder={t('enter_value') || ''}
                        name={FIELD_CLINIC_NAME} label={t('clinic') || ''} />
                </div>

                <div className="half-content mb-4">
                   
                    <div className="w-50">
                        <TextFieldController placeholder={t('enter_value') || ''} control={control}
                            name={FIELD_CITY} label={t('city') || ''} />
                    </div>
                </div>

                <div className="half-content">
                    <div className="w-50">
                        <TextFieldController control={control} placeholder={t('enter_value') || ''}
                            name={FIELD_COORDINATOR_NAME} label={t('coordinator_name') || ''} />
                    </div>
                    <div className="w-50">
                        <TextFieldController control={control} placeholder={t('enter_value') || ''}
                            name={FIELD_PHONE} label={t('phone') || ''} />
                    </div>
                </div>
            </div>
        </div>
        <div className="form-actions">
            <Button htmlType="submit" className="button--1">{t('save')}</Button>
            <Button htmlType="button" onClick={() => navigate(-1)} className="button--2" color="warning">{t('cancel')}</Button>
        </div>
    </form>
}

export const CLINICS_MOCK = [
    {
        value: 'clinic-1',
        label: 'Clinic 1'
    },
    {
        value: 'clinic-2',
        label: 'Clinic 2'
    },
]

export const CLINIC_MOCK = {
    "city": "Tashkent",
    "clinic_name": "St. Mary’s Hospital",
    "coordinator_name": "Борисова Ольга",
    "phone": "01048389959"
}