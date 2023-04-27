import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './styles.scss';
import { Column } from "./Column";
import { IColumn } from "../../constants";

const initialData: IColumn[] = [
  {
    id: "column-1",
    title: "Новое обращение",
    cards: [
      { id: "card-1", text: "Card 1" },
      { id: "card-2", text: "Card 2" },
    ],
  },
  {
    id: "column-2",
    title: "Запрос отправлен",
    cards: [{ id: "card-3", text: "Card 3" }],
  },
  {
    id: "column-3",
    title: "В процессе",
    cards: [{ id: "card-4", text: "Card 4" }],
  },
  {
    id: "column-4",
    title: "Забронировал",
    cards: [{ id: "card-5", text: "Card 5" }],
  },
  {
    id: "column-5",
    title: "Выкупил билеты",
    cards: [{ id: "card-6", text: "Card 6" }],
  },
  {
    id: "column-6",
    title: "Прилетел",
    cards: [{ id: "card-7", text: "Card 7" }],
  },
];

export const PatientsDnd = () => {
    const [columns, setColumns] = useState(initialData);
  
    const moveCard = (
      sourceColumnIndex: any,
      sourceCardIndex: number,
      targetColumnIndex: number,
      targetCardIndex: number
    ) => {

        console.log({sourceColumnIndex}, {sourceCardIndex}, {targetColumnIndex}, {targetCardIndex});
        
        if(sourceColumnIndex === targetColumnIndex) {
          return;
        }

      const sourceColumn = columns[sourceColumnIndex];
      const targetColumn = columns[targetColumnIndex];
  
      const sourceCards = [...sourceColumn.cards];
      const targetCards = [...targetColumn.cards];
  
      const [removedCard] = sourceCards.splice(sourceCardIndex, 1);
      targetCards.splice(targetCardIndex, 0, removedCard);
  
      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        cards: sourceCards,
      };
      newColumns[targetColumnIndex] = {
        ...targetColumn,
        cards: targetCards,
      };
  
      setColumns(newColumns);
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="patients-dnd">
          {columns.map((column, i) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              cards={column.cards}
              index={i}
              moveCard={moveCard}
            />
          ))}
        </div>
      </DndProvider>
    );
  };
  