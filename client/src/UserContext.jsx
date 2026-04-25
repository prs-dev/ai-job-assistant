import { createContext, useContext } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value="test">{children}</UserContext.Provider>
    )
}

