import { FC } from "react";
import { DataTable } from "../../../../components/data-table";

import './styles.scss';
import { FormIcon } from "../../../../common/icons/FormIcon";
import { DownIcon } from "../../../../common/icons/DownIcon";
import { ColumnType } from "antd/es/table";
import { InputDropdown } from "../../../../components/inputs/input-dropdown";
import { COORDINATORS_FILTER } from "../../constants";
import { useNavigate } from "react-router-dom";

const data = [
    {
        key: '1',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    },
    {
        key: '2',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    },
    {
        key: '3',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    },
    {
        key: '4',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    },
    {
        key: '5',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    },
    {
        key: '6',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    }]

export const PatientsList: FC = () => {

    const navigate = useNavigate();

    const handleDropdown = (values: any) => {
        console.log(values);
    }
    const getColumnSearchProps = (dataIndex: any, filterItems: any[]): ColumnType<any> => ({
        filterDropdown: ({ close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <InputDropdown
                        onClose={close}
                        onChange={handleDropdown}
                        options={filterItems}
                        multiple={true}
                        styles={{ width: '200px' }}
                    />
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <DownIcon />
        ),
    });

    const columns = [
        {
            title: 'Пациент',
            dataIndex: 'patient',
            key: 'patient',
            render: (patient: { name: string, age: number }) => <div className="patients-cell">
                <span className="icon"><FormIcon /></span>
                <span>
                    {patient.name}
                    <div className="sub-info">{patient.age} лет</div>
                </span>
            </div>
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status: { status: string, status_date: string }) => <div>{status.status}<div className="sub-info">{status.status_date}</div></div>
        },
        {
            title: 'Дата обращения',
            dataIndex: 'application_data',
            key: 'application_data',
            render: (app_date: { date: string, year: string }) => <div>{app_date.date}<div className="sub-info">{app_date.year}</div></div>
        },
        {
            title: 'Город проживания',
            dataIndex: 'living_place',
            key: 'living_place',
            render: (living_place: { country: string, city: string }) => <div>{living_place.country}<div className="sub-info">{living_place.city}</div></div>
        },
        {
            title: 'Диагноз',
            dataIndex: 'diagnosys',
            key: 'diagnosys',
        },
    
        {
            title: 'Стоимость',
            dataIndex: 'price',
            key: 'price',
            render: (price: { value: string, currency: string }) => <div>{price.value}<div className="sub-info">{price.currency}</div></div>
        },
        {
            title: 'Вылет и прилет',
            dataIndex: 'departure_arrival',
            key: 'departure_arrival',
            render: (departure_arrival: { departure: string, arrival: string }) => <div>{departure_arrival.departure}<div className="sub-info">{departure_arrival.arrival}</div></div>
        },
        {
            title: 'Координатор',
            dataIndex: 'coordinator',
            key: 'coordinator',
            ...getColumnSearchProps('coordinator', COORDINATORS_FILTER),
        },
        {
            title: 'Источник',
            dataIndex: 'source',
            key: 'source',
            render: (source: { branch: string, agent: string }) => <div>{source.branch}<br />{source.agent}</div>,
            ...getColumnSearchProps('coordinator', COORDINATORS_FILTER),
        },
    ];

    const onSelectRow = (index: any, value: any) => {
        navigate(value.key)
    }

    return <div className="patients-list">
        <DataTable columns={columns} data={data} onSelectRow={onSelectRow} />
    </div>
}
