const useApi = () => {
    const registerUser = async (body) => {
        const res = await fetch('/api/auth/register', {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.ok) {
            const data = await res.json()
            return data
        }
    }

    const loginUser = async (body) => {
        const res = await fetch('/api/auth/login', {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.ok) {
            const data = await res.json()
            return data
        }
    }

    const userDetails = async(token) => {
        const res = await fetch('/api/auth/user', {
            method: "get",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const createNewJob = async(body, token) => {
        const res = await fetch('/api/job/create', {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const allJobs = async(id, token) => {
        const res = await fetch(`/api/job/all/${id}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const updateJobStatus = async(body, token, userId) => {
        const res = await fetch(`/api/job/update/${userId}/${body._id}`, {
            method: "put",
            body: JSON.stringify({status: body.status}),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const deleteJob = async(token, id, userId) => {
        const res = await fetch(`/api/job/delete/${userId}/${id}`, {
            method: "delete",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const fetchSummary = async(token, id) => {
        const res = await fetch(`/api/job/summary/${id}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const aiAnalyse = async(token, input) => {
        const res = await fetch('/api/ai/analyse', {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`
            },
             body: JSON.stringify({input})
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const aiCover = async(token, input) => {
        const res = await fetch('/api/ai/cover', {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`
            },
             body: JSON.stringify({input})
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const aiCompare = async(token, input, filename) => {
        const res = await fetch('/api/ai/compare', {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`
            },
             body: JSON.stringify({input, filename})
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    const uploadResume = async(token, body) => {
        const res = await fetch('/api/upload', {
            method: "post",
            headers: {
                authorization: `Bearer ${token}`
            },
            body
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    }

    return {
        registerUser,
        loginUser,
        userDetails,
        createNewJob,
        allJobs,
        updateJobStatus, 
        deleteJob,
        fetchSummary, 
        aiAnalyse, 
        aiCover,
        uploadResume, 
        aiCompare
    }
}

export default useApi