import { FC } from "react";
import { DataTable } from "../../../../components/data-table";
import { FormIcon } from "../../../../common/icons/FormIcon";
import { useNavigate } from "react-router-dom";

export const SourcesList: FC = () => {
    const navigate = useNavigate();
    const data = [
        {
            key: '1',
            name: 'WonjinPS',
            number: '010 1234 56 78',
            email: 'Seoul',
            password: 'Наталья',
        }
    ]

    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            render: (name: string) => <div className="patients-cell">
                <span className="icon"><FormIcon /></span>
                <span>
                    {name}
                </span>
            </div>
        },
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Почта',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Пароль',
            dataIndex: 'password',
            key: 'password',
        }
        
    ];
    const onSelectRow = (index: any, value: any) => {
        navigate(value.key)
    }

    return <div className="patients-list">
        <DataTable columns={columns} data={data} onSelectRow={onSelectRow} />
    </div>
}