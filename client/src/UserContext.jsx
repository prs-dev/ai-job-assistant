import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState('')
    return (
        <UserContext.Provider value={{token, setToken}}>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => {
    const {token, setToken} = useContext(UserContext)
    return {
        token,
        setToken
    }
}

