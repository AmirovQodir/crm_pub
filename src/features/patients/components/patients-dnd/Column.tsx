import React, { Fragment } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card";
import { ICard, Item } from "../../constants";

type Props = {
    id: string;
    title: string;
    cards: ICard[];
    index: number;
    moveCard: (sourceColumnIndex: number | string, sourceCardIndex: number, targetColumnIndex: number, targetCardIndex: number) => void;
};

export const Column: React.FC<Props> = ({ id, title, cards, index, moveCard }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'CARD',
        drop: (item: Item, monitor) => {
            const sourceColumnIndex = item.columnIndex;
            const sourceCardIndex = item.index;
            const targetColumnIndex = index;
            const targetCardIndex = cards.length;
            moveCard(sourceColumnIndex, sourceCardIndex, targetColumnIndex, targetCardIndex);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const backgroundColor = isOver ? "lightgrey" : "white";

    return (
        <div className="column" ref={drop} style={{ backgroundColor }}>
            <div className="column__header">
                <h3 className="column__title">{title}</h3>
                 <div className="column__badge">{cards.length}</div>
            </div>
            <div className="column__content">
                {cards.map((card, idx) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        text={card.text}
                        index={idx}
                        columnIndex={index}
                        columnId={id}
                        moveCard={moveCard}
                    />
                ))}
            </div>
        </div>
    );
};
