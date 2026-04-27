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

    return {
        registerUser,
        loginUser,
        userDetails,
        createNewJob
    }
}

export default useApi