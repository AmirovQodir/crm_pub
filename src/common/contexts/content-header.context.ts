import React from "react";

export interface IContentHeader { label: string, setLabel: (value: string) => void }

export const ContentHeaderContext = React.createContext<IContentHeader | null>(null)