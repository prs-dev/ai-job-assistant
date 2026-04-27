import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { useUserContext } from "../UserContext";

export const JobContext = createContext()

export const JobContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState(null)

    const { allJobs } = useApi()

    const { token, user } = useUserContext()

    // console.log("user I am here", user._id)

    useEffect(() => {
        if (user) {
            allJobs(user?._id, token)
                .then(data => {
                    // console.log("jobs", data)
                    setJobs(data.jobs)
                })
        }
    }, [])

    return (
        <JobContext.Provider value={{jobs, setJobs}}>
            {children}
        </JobContext.Provider>
    )
}

export const useJobContext = () => {
    const value = useContext(JobContext)
    return value
}