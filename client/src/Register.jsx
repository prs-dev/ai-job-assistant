import { useState } from 'react'
import useApi from './hooks/useApi'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [state, setState] = useState(null)

  const { registerUser } = useApi()

  const navigate = useNavigate()

  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await registerUser(state)
    if (data) {
      console.log(data)
      setState(null)
      navigate('/login')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={state?.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={state?.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value={state?.password} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

export default Register