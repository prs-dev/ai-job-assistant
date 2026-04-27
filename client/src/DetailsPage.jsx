import React from 'react'
import { useJobContext } from './context/JobContext'

const DetailsPage = () => {
  const {jobs} = useJobContext()
  console.log("jobs", jobs)
  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage