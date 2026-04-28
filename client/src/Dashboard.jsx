import React from 'react'
import { useJobContext } from './context/JobContext'

const Dashboard = () => {
  const {summary} = useJobContext()
  console.log("summary", summary)
  return (
    <div>
      <div>
        <h2>Total Jobs</h2>
        <p>{summary?.totalCount?.[0].totalJobs}</p>
      </div>
      <div>
        <h2>By Status</h2>
        <p>{summary?.status?.map(item => <>
          <p>{item._id}</p>
          <p>{item.totalJobs}</p>
        </>)}</p>
      </div>
    </div>
  )
}

export default Dashboard