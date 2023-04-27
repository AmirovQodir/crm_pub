import { FC, useState } from "react";
import { SidebarContext } from "../contexts";

export const SidebarProvider: FC<any> = ({children}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return <SidebarContext.Provider value={{collapsed, setCollapsed}}>
        {children}
    </SidebarContext.Provider>
}