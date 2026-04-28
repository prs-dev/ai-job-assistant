import { useState } from 'react'
import useApi from './hooks/useApi'
import { useNavigate } from 'react-router-dom'

//shadcn
import { Input } from '@/components/ui/input'
import { FieldLabel, Field, FieldLegend, FieldDescription } from '@/components/ui/field'
import { Button } from '@/components/ui/button'

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
    <form onSubmit={handleSubmit} className='w-full max-w-sm flex flex-col gap-3'>
      <Field>
        <FieldLegend>Register</FieldLegend>
        <FieldDescription>register as new user to login</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="">Name</FieldLabel>
        <Input type="text" name="name" value={state?.name} onChange={handleChange} />
      </Field>
      <Field>
        <FieldLabel htmlFor="">Email</FieldLabel>
        <Input type="email" name="email" value={state?.email} onChange={handleChange} />
      </Field>
      <Field>
        <FieldLabel htmlFor="">Password</FieldLabel>
        <Input type="password" name="password" value={state?.password} onChange={handleChange} />
      </Field>
      <Field>
        <Button type="submit">Submit</Button>
      </Field>
      <Field orientation='horizontal' className="text-sm">
        Already registered?<span className='font-bold underline' onClick={() => navigate('/login')}>Login</span>
      </Field>
    </form>
  )
}

export default Register