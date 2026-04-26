import {useState} from 'react'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'

const Login = () => {
  const [state, setState] = useState(null)

  const {loginUser} = useApi()

  const {token, setToken} = useUserContext()

  const handleChange = e => {
    setState(prev => ({...prev, [e.target.name]: e.target.value}))
  }

const handleSubmit = async e => {
  e.preventDefault()
  const data = await loginUser(state)
  if(data) {
    console.log(data)
    setState(null)
    setToken(data?.token)
  }
}

console.log("token", token)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={state?.email} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value={state?.password} onChange={handleChange}/>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

export default Login