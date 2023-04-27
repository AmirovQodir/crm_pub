import { FC, useState } from "react";
import { ContentHeaderContext, } from "../contexts";

export const ContentHeaderProvider: FC<any> = ({children}) => {
    const [label, setLabel] = useState<string>('');

    return <ContentHeaderContext.Provider value={{label, setLabel}}>
        {children}
    </ContentHeaderContext.Provider>
}