export type ICard = {
    id: string;
    text: string;
};

export type IColumn = {
    id: string;
    title: string;
    cards: ICard[];
};

export type Item = {
    type: string;
    id: string;
    index: number;
    columnId: string;
    columnIndex: string
};