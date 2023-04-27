import { FC } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

import { TextFieldController } from "../../../../components/inputs/text-filed-controller";
import { useProcessForm } from "../../hooks";
import { FIELD_PROCESS_AFTER, FIELD_PROCESS_BEFORE, FIELD_PROCESS_WHILE } from "../../../../common/constants";

interface IPatientFormProps {
    patient_id?: string
}

export const ProcessForm: FC<IPatientFormProps> = () => {

    const { control, handleProcessForm, isLoading } = useProcessForm()

    const { t } = useTranslation();

    return <form onSubmit={handleProcessForm} className="form-container">

        <div className="form-inputs">
            <div>
                <div className="mb-4">
                    <TextFieldController control={control}
                        name={FIELD_PROCESS_BEFORE} rows={3}
                        inputCompound="TextArea"
                        placeholder={t('enter_text') || ''}
                        label={t('before_process') || ''}
                    />
                </div>
                <div className="mb-4">
                    <TextFieldController control={control}
                        name={FIELD_PROCESS_WHILE} rows={3}
                        inputCompound="TextArea"
                        placeholder={t('enter_text') || ''}
                        label={t('while_process') || ''}
                    />
                </div>
                <div className="mb-4">
                    <TextFieldController control={control}
                        name={FIELD_PROCESS_AFTER} rows={3}
                        inputCompound="TextArea"
                        placeholder={t('enter_text') || ''}
                        label={t('after_process') || ''}
                    />
                </div>
            </div>

        </div>
        <div className="form-actions">
            <Button htmlType="submit" className="button--1">{t('save')}</Button>
            <Button htmlType="button" className="button--2" color="warning">{t('cancel')}</Button>
        </div>
    </form>
}
