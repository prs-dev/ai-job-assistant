import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { useUserContext } from "../UserContext";

export const JobContext = createContext()

export const JobContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState(null)
    const [summary, setSummary] = useState(null)

    const { allJobs, fetchSummary } = useApi()

    const { token, user } = useUserContext()

    // console.log("user I am here", user._id)

    useEffect(() => {
        if (user._id) {
            allJobs(user?._id, token)
                .then(data => {
                    // console.log("jobs", data)
                    setJobs(data.jobs)
                })
        }
    }, [token])

    useEffect(() => {
        if (user._id) {
            fetchSummary(token, user._id)
                .then(data => {
                    // console.log("jobs", data)
                    setSummary(data?.summary[0])
                })
        }
    }, [token])

    return (
        <JobContext.Provider value={{jobs, setJobs, summary}}>
            {children}
        </JobContext.Provider>
    )
}

export const useJobContext = () => {
    const value = useContext(JobContext)
    return value
}