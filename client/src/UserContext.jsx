import { createContext, useContext, useEffect, useState } from "react";
import useApi from "./hooks/useApi";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const { userDetails } = useApi()

    const [token, setToken] = useState(() => {
        const data = localStorage.getItem("token")
        return data
    })

    const [user, setUser] = useState(() => {
        const data = localStorage.getItem("user")
        return data
    })

    useEffect(() => {
        if (token) localStorage.setItem("token", token)
        else localStorage.removeItem("token")
    }, [token])

    useEffect(() => {
        if (token) {
            userDetails(token)
                .then(data => {
                    console.log('user', data)
                    setUser(data.user)
                    localStorage.setItem("user", JSON.stringify(data.user))
                })
        }
        else localStorage.removeItem("user")
    }, [token])

    return (
        <UserContext.Provider value={{ token, setToken }}>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => {
    const { token, setToken } = useContext(UserContext)
    return {
        token,
        setToken
    }
}

