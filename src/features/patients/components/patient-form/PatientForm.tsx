import { FC, useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { TextFieldController } from "../../../../components/inputs/text-filed-controller";
import { usePatientForm } from "../../hooks";
import { SelectController } from "../../../../components/inputs/select-controller";
import { DatePickerController } from "../../../../components/inputs/datepicker-controller";
import { ContentHeaderContext, IContentHeader } from "../../../../common/contexts";
import { FIELD_APPLICATION_DATE, FIELD_ARRIVAL_DATE, FIELD_BIRTH_DATE, FIELD_CLINIC, FIELD_COORDINATOR, FIELD_COORDINATOR_CLINIC, FIELD_DEPARTURE_DATE, FIELD_DIAGNOSE, FIELD_EMAIL, FIELD_FULL_NAME, FIELD_LIVING_CITY, FIELD_PHONE, FIELD_PHONE_EX, FIELD_SOURCE, FIELD_STATUS } from "../../../../common/constants";
import './styles.scss';


interface IPatientFormProps {
    patient_id?: string
}

export const PatientForm: FC<IPatientFormProps> = () => {
    const { id } = useParams()
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { control, handlePatientForm, isLoading, setValue, resetValues, handleReset } = usePatientForm()
    const navigate = useNavigate()

    useEffect(() => {
        if(id) {
            resetValues(PATIENT_MOCK);
            setLabel(PATIENT_MOCK.full_name)
        } else {
            setLabel(`${t('create')} ${t('patient').toLowerCase()}`)
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
                        name={FIELD_FULL_NAME} label={t('fio') || ''} />
                </div>

                <div className="half-content mb-4">
                    <div className="w-50">
                        <DatePickerController
                            placeholder={t('enter_value') || ''}
                            control={control}
                            style={{ width: '100%' }}
                            name={FIELD_BIRTH_DATE}
                            setValue={setValue}
                            label={t('birth_date') || ''}
                        />
                    </div>
                    <div className="w-50">
                        <TextFieldController placeholder={t('enter_value') || ''} control={control}
                            name={FIELD_LIVING_CITY} label={t('living_city') || ''} />
                    </div>
                </div>

                <div className="half-content">
                    <div className="w-50">
                        <TextFieldController control={control} placeholder={t('enter_value') || ''}
                            name={FIELD_PHONE} label={t('phone_of_patient') || ''} />
                    </div>
                    <div className="w-50">
                        <TextFieldController control={control} placeholder={t('enter_value') || ''}
                            name={FIELD_EMAIL} label={t('email') || ''} />
                    </div>
                </div>

                <div className="half-content mb-4">
                    <div className="w-50">
                        <TextFieldController control={control} placeholder={t('enter_value') || ''}
                            name={FIELD_PHONE_EX} />
                    </div>
                </div>

            </div>
            <div>
                <div className="mb-4">
                    <TextFieldController control={control}
                        placeholder={t('enter_value') || ''}
                        name={FIELD_STATUS} label={t('status') || ''} />
                </div>
                <div className="mb-4">
                    <TextFieldController control={control} inputCompound={'TextArea'}
                        rows={3} placeholder={t('enter_value') || ''}
                        name={FIELD_DIAGNOSE} label={t('diagnose') || ''} />
                </div>
                <div className="half-content mb-4">
                    <div className="w-50">
                        <TextFieldController control={control}
                            placeholder={t('enter_value') || ''}
                            name={FIELD_COORDINATOR} label={t('coordinator') || ''} />
                    </div>
                    <div className="w-50">
                        <TextFieldController control={control}
                            placeholder={t('enter_value') || ''}
                            name={FIELD_COORDINATOR_CLINIC} label={t('coordinator_in_clinic') || ''} />
                    </div>
                </div>

                <div className="mb-4">
                    <SelectController style={{ width: '100%' }}
                        setValue={setValue} control={control}
                        name={FIELD_CLINIC}
                        items={CLINICS_MOCK}
                        placeholder={t('choose_option') || ''}
                        label={t('choose_clinic') || ''}
                    />
                </div>

                <div className="mb-4">
                    <DatePickerController
                        placeholder={t('enter_value') || ''}
                        style={{ width: '100%' }}
                        control={control}
                        name={FIELD_APPLICATION_DATE}
                        setValue={setValue}
                        label={t('date_of_application') || ''}
                    />
                </div>

                <div className="mb-4">
                    <TextFieldController control={control}
                        placeholder={t('enter_value') || ''}
                        name={FIELD_SOURCE} label={t('source') || ''} />
                </div>

                <div className="mb-4">
                    <DatePickerController
                        placeholder={t('enter_value') || ''}
                        style={{ width: '100%' }}
                        control={control}
                        name={FIELD_DEPARTURE_DATE}
                        setValue={setValue}
                        label={t('departure_date') || ''}
                    />
                </div>

                <div>
                    <DatePickerController
                        style={{ width: '100%' }}
                        control={control}
                        name={FIELD_ARRIVAL_DATE}
                        setValue={setValue}
                        label={t('arrival_date') || ''}
                        placeholder={t('enter_value') || ''}
                    />
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

export const PATIENT_MOCK = {
    "full_name": "Борисова Ольга",
    "birth_date": "1986-12-27",
    "living_city": "Узбекистан, Ташкент",
    "clinic": "clinic-1",
    "phone": "+770212345678",
    "email": "borisova@mail.ru",
    "phone_ex": "+770212345678",
    "status": "Пациент в клинике",
    "diagnose": "ГЭРБ, ЖКБ, Признаки кишечной метаплазии слизистой пилорического отдела желудка",
    "coordinator": "Мун Вероника",
    "coordinator_clinic": "Светлана",
    "application_date": "2023-04-25",
    "source": "Мун Вероника",
    "departure_date": "2023-04-25",
    "arrival_date": "2023-04-04"
}