import { FC } from "react";
import { DataTable } from "../../../../components/data-table";
import { FormIcon } from "../../../../common/icons/FormIcon";
import { useNavigate } from "react-router-dom";

export const ClinicsList: FC = () => {
    const navigate = useNavigate();

    const data = [
        {
            key: '1',
            clinic: 'WonjinPS',
            city: 'Seoul',
            coordinator: 'Наталья',
            number: '010 1234 56 78',
        },
        {
            key: '2',
            clinic: 'St. Mary’s Hospital',
            city: 'Incheon',
            coordinator: 'Диана',
            number: '010 1234 56 78',
        },
        {
            key: '3',
            clinic: 'Chung-Ang',
            city: 'Seoul',
            coordinator: 'Рита',
            number: '010 1234 56 78',
        },
        {
            key: '4',
            clinic: 'Lifedental',
            city: 'Seoul',
            coordinator: 'Ольга',
            number: '010 1234 56 78',
        },
        
    ]

    const columns = [
        {
            title: 'Клиника',
            dataIndex: 'clinic',
            key: 'clinic',
            render: (clinic: string) => <div className="patients-cell">
                <span className="icon"><FormIcon /></span>
                <span>
                    {clinic}
                </span>
            </div>
        },
        {
            title: 'Город',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Координатор',
            dataIndex: 'coordinator',
            key: 'coordinator',
        },
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
        }
        
    ];
    const onSelectRow = (index: any, value: any) => {
        navigate(value.key)
    }

    return <div className="patients-list">
        <DataTable columns={columns} data={data} onSelectRow={onSelectRow} />
    </div>
}