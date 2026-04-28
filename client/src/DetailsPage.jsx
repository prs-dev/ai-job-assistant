import React, { useEffect, useState } from 'react'
import { useJobContext } from './context/JobContext'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'

const DetailsPage = () => {
  const { jobs, setJobs } = useJobContext()
  const [active, setActive] = useState(null) //for update
  const [toDelete, setToDelete] = useState(null)
  const [answer, setAnswer] = useState('no')
  const {user, token} = useUserContext()
  const {updateJobStatus, deleteJob, allJobs} = useApi()
  console.log("jobs", jobs)
  const handleStatusChange = async() => {
    const data = await updateJobStatus(active, token, user._id)
    if(data) {
      console.log("details", data)
      setActive(null)
    }
  }

  useEffect(() => {
    if(answer === 'yes') {
      deleteJob(token, toDelete, user._id)
      .then(data => {
        console.log(data)
        setJobs(prev => prev.filter(item => item._id !== toDelete))
        setToDelete(null)
      })
    }
  }, [toDelete, answer])

  console.log("active", active, toDelete, answer)
  return (
    <div>
      {jobs?.map(job => {
        return (
          <>
            <div>
              <label>Company</label>
              <p>{job?.company}</p>
            </div>
            <div>
              <label>Role</label>
              <p>{job?.role}</p>
            </div>
            <div>
              <label>Status</label>
              {/* <p>{job?.status}</p> */}
              <div>
                <select value={active?._id === job?._id ? active.status : job.status} onChange={e => setActive({
                  _id: job._id,
                  status: e.target.value
                })}>
                  <option value="interview">Interview</option>
                  <option value="rejected">Rejected</option>
                  <option value="applied">Applied</option>
                </select>
                <button onClick={handleStatusChange}>Change Status</button>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <p>{job?.notes}</p>
            </div>
            <div>
              <button onClick={() => {
                setToDelete(job._id)
                const answer = window.prompt("Are you sure?, type yes to confirm")
                setAnswer(answer)
              }}>Delete this Job?</button>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default DetailsPage