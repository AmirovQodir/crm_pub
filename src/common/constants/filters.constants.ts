import { IFilter } from "../models";

export const FILTER_CONSTANTS: IFilter[] = [
    {
        label: 'status',
        value: 'status',
        children: [{
            label: 'new',
            value: 'new'
        },
        {
            label: 'Запрос отправлен',
            value: 'request_sended'
        },
        {
            label: 'В процессе',
            value: 'in_precess'
        },
        {
            label: 'Забронировал',
            value: 'booked'
        },
        {
            label: 'Выкупил билеты',
            value: 'bought_ticket'
        },
        {
            label: 'Прибыл',
            value: 'arrived'
        }]
    },
    {
        label: 'Координатор',
        value: 'coordinator',
        children: [
            {
                label: 'Ли Алена',
                value: 'alyona'
            },
            {
                label: 'Дим Нелли',
                value: 'nelli'
            },
            {
                label: 'Мун Вероника',
                value: 'veronika'
            },
            {
                label: 'Хан Анна',
                value: 'anna'
            },
            {
                label: 'Ким Наталья',
                value: 'nataliya'
            },
            {
                label: 'Шин Марина',
                value: 'marina'
            }
        ]
    },
    {
        label: 'Год',
        value: 'year',
        children: [
            {
                value: '2022',
                label: '2022'
            },
            {
                value: '2023',
                label: '2023'
            }
        ]
    },
    {
        label: 'Месяц',
        value: 'month',
        children: [
            {
                value: 'january',
                label: 'Январь'
            },
            {
                value: 'february',
                label: 'Февраль'
            },
            {
                value: 'march',
                label: 'Март'
            },
            {
                value: 'april',
                label: 'Апрель'
            },
            {
                value: 'may',
                label: 'Май'
            },
            {
                value: 'june',
                label: 'Июнь'
            },
            {
                value: 'july',
                label: 'Июль'
            },
            {
                value: 'august',
                label: 'Август'
            },
            {
                value: 'september',
                label: 'Сентябрь'
            },
            {
                value: 'october',
                label: 'Октябрь'
            },
            {
                value: 'november',
                label: 'Ноябрь'
            },
            {
                value: 'december',
                label: 'Декабрь'
            },
        ]
    }
]

export const SEARCH_DROPDOWN:IFilter[] = [
    {
        value: 'patient',
        label: 'patient'
    },
    {
        value: 'status',
        label: 'Статус'
    },
    {
        value: 'date',
        label: 'Дата обращения'
    },
    {
        value: 'residence',
        label: 'Город проживания'
    },
    {
        value: 'diagnosis',
        label: 'Диагноз'
    },
    {
        value: 'price',
        label: 'Стоимость'
    },
    {
        value: 'departure and arrival',
        label: 'Вылет и прилет'
    }
];

