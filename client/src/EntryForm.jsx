import { useState } from 'react'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'
import { useJobContext } from './context/JobContext'

//shadcn
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import {Field, FieldLabel} from '@/components/ui/field'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import { Textarea } from './components/ui/textarea'
import { NativeSelect, NativeSelectOption } from './components/ui/native-select'
import { Spinner } from './components/ui/spinner'

const EntryForm = () => {
  const { createNewJob } = useApi()
  const { token } = useUserContext()
  const { loading, setLoading } = useJobContext()
  const [state, setState] = useState({
    company: '',
    role: '',
    status: 'applied',
    notes: ''
  })
  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const data = await createNewJob(state, token)
    if (data) {
      setState({
        company: '',
        role: '',
        status: 'applied',
        notes: ''
      })
      console.log("job", data)
      setLoading(false)
    }
  }
  return (
    <>
      <Card className="w-full max-w-sm text-gray-200 bg-gray-800">
        <CardHeader>
          <CardTitle>Entry Form</CardTitle>
          <CardDescription>Entry form for new entry of job</CardDescription>
        </CardHeader>
        <CardContent>
          <form id='form' onSubmit={handleSubmit}>
            <Field>
              <FieldLabel htmlFor="">Company</FieldLabel>
              <Input type="text" name="company" value={state?.company} onChange={handleChange} />
            </Field>
            <Field>
              <FieldLabel htmlFor="">Role</FieldLabel>
              <Input type="text" name="role" value={state?.role} onChange={handleChange} />
            </Field>
            <Field>
              <FieldLabel htmlFor="">Status</FieldLabel>
              <NativeSelect name="status" value={state?.status} onChange={handleChange}>
                <NativeSelectOption value="" disabled>Select</NativeSelectOption>
                <NativeSelectOption value="interview">Interview</NativeSelectOption>
                <NativeSelectOption value="applied">Applied</NativeSelectOption>
                <NativeSelectOption value="rejected">Rejected</NativeSelectOption>
              </NativeSelect>
            </Field>
            <Field>
              <FieldLabel htmlFor="">Note</FieldLabel>
              <Textarea name='notes' value={state?.notes} onChange={handleChange} />
            </Field>
          </form>
        </CardContent>
        <CardFooter className="w-full ">
              <Button variant='outline' form='form' className='w-full bg-transparent' type="submit">Save</Button>
        </CardFooter>
      </Card>
      {loading && <div className='flex gap-2 items-center'>
        <Spinner />
        <span>saving changes...</span>
      </div>}
    </>
  )
}

export default EntryForm