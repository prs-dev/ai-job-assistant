import { useState } from 'react'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'

const EntryForm = () => {
  const { createNewJob } = useApi()
  const { token } = useUserContext()
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
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Company</label>
        <input type="text" name="company" value={state?.company} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">Role</label>
        <input type="text" name="role" value={state?.role} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">Status</label>
        <select name="status" value={state?.status} onChange={handleChange}>
          <option value="" disabled>Select</option>
          <option value="interview">Interview</option>
          <option value="applied">Applied</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Note</label>
        <textarea name='notes' value={state?.notes} onChange={handleChange}/>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

export default EntryForm