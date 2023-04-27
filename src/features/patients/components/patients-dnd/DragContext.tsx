import React, { createContext, useState } from 'react';
// import { DragItem } from './types';

export interface DragContextProps {
  draggedItem: DragItem | null;
  setDraggedItem: React.Dispatch<React.SetStateAction<DragItem | null>>;
}

export const DragContext = createContext<DragContextProps>({
  draggedItem: null,
  setDraggedItem: () => {},
});

interface DragProviderProps {
  children: React.ReactNode;
}

export const DragProvider = ({ children }: DragProviderProps) => {
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);

  return (
    <DragContext.Provider value={{ draggedItem, setDraggedItem }}>
      {children}
    </DragContext.Provider>
  );
};

export enum ItemType {
    COLUMN = 'COLUMN',
    CARD = 'CARD',
}

export interface DragItem {
    index: number;
    id: string;
    type: ItemType;
}