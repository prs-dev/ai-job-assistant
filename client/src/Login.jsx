import {useState} from 'react'

const Login = () => {
  const [state, setState] = useState(null)

  const handleChange = e => {
    setState(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <form>
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