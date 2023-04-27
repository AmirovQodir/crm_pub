import { FC, useContext, useEffect } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { TextFieldController } from "../../../../components/inputs/text-filed-controller";
import { useSourceForm } from "../../hooks";
import { ContentHeaderContext, IContentHeader } from "../../../../common/contexts";
import { FIELD_NAME, FIELD_EMAIL, FIELD_PASSWORD, FIELD_PHONE } from "../../../../common/constants";

export const SourceForm: FC = () => {
    const { id } = useParams()
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { control, handleSourceForm, isLoading, resetValues, handleReset } = useSourceForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            resetValues(SOURCE_MOCK);
            setLabel(SOURCE_MOCK.name)
        } else {
            setLabel(`${t('add')} ${t('sources_or_agency').toLowerCase()}`)
            handleReset()
        }
    }, [id])

    const { t } = useTranslation();

    return <form onSubmit={handleSourceForm} className="form-container">

        <div className="form-inputs">
            <div>

                <div className="mb-4">
                    <TextFieldController control={control} placeholder={t('enter_value') || ''}
                        name={FIELD_NAME} label={t('name') || ''} />
                </div>

                <div className="mb-4">
                    <TextFieldController control={control} placeholder={t('enter_value') || ''}
                        name={FIELD_PHONE} label={t('phone') || ''} />
                </div>

                <div className="mb-4">
                    <TextFieldController placeholder={t('enter_value') || ''} control={control}
                        name={FIELD_EMAIL} label={t('email') || ''} />
                </div>

                <div className="mb-4">
                    <TextFieldController control={control}
                        placeholder={t('enter_value') || ''}
                        name={FIELD_PASSWORD} label={t('password') || ''} />
                </div>

            </div>
        </div>
        <div className="form-actions">
            <Button htmlType="submit" className="button--1">{t('save')}</Button>
            <Button htmlType="button" onClick={() => navigate(-1)} className="button--2" color="warning">{t('cancel')}</Button>
        </div>
    </form>
}

export const SOURCE_MOCK = {
    "name": "WonjinPS",
    "phone": "01048389959",
    "email": "amirovqodir911@gmail.com",
    "password": "123456"
}