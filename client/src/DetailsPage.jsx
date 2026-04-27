import React from 'react'
import { useJobContext } from './context/JobContext'

const DetailsPage = () => {
  const { jobs } = useJobContext()
  console.log("jobs", jobs)
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
            <p>{job?.status}</p>
          </div>
          <div>
            <label>Notes</label>
            <p>{job?.notes}</p>
          </div>
          </>
        )
      })}
    </div>
  )
}

export default DetailsPage