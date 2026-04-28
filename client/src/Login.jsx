import {useState} from 'react'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'

//shadcn
import {Field, FieldLabel} from '@/components/ui/field'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'

const Login = () => {
  const [state, setState] = useState(null)

  const {loginUser} = useApi()

  const navigate = useNavigate()

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
    <form onSubmit={handleSubmit} className='w-full max-w-sm flex flex-col gap-3'>
      {/* <div>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={state?.email} onChange={handleChange}/>
      </div> */}
      <Field>
        <FieldLabel>
          Email
        </FieldLabel>
        <Input type="email" name="email" value={state?.email} onChange={handleChange}/>
      </Field>
      <Field>
        <FieldLabel>
          Password
        </FieldLabel>
        <Input type="password" name="password" value={state?.password} onChange={handleChange}/>
      </Field>
      {/* <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value={state?.password} onChange={handleChange}/>
      </div> */}
      {/* <div>
        <button type="submit">Save</button>
      </div> */}
      <Field>
        <Button type="submit">Submit</Button>
      </Field>
      <Field orientation='horizontal' className="text-sm">
        New here? Please<span className='font-bold underline' onClick={() => navigate('/register')}>Register</span>
      </Field>
    </form>
  )
}

export default Login