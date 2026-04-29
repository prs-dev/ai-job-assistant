import React, { useEffect, useState } from 'react'
import { useJobContext } from './context/JobContext'
import useApi from './hooks/useApi'
import { useUserContext } from './UserContext'

//shadcn
import { Card, CardTitle, CardDescription, CardHeader, CardFooter, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'
import { NativeSelect, NativeSelectOption } from './components/ui/native-select'
import { Field, FieldContent, FieldLabel } from './components/ui/field'

const DetailsPage = () => {
  const { jobs, setJobs, setLoading, loading } = useJobContext()
  const [active, setActive] = useState(null) //for update
  const [toDelete, setToDelete] = useState(null)
  const [answer, setAnswer] = useState('no')
  const { user, token } = useUserContext()
  const { updateJobStatus, deleteJob, allJobs } = useApi()
  console.log("jobs", jobs)
  const handleStatusChange = async () => {
    setLoading(true)
    const data = await updateJobStatus(active, token, user._id)
    if (data) {
      console.log("details", data)
      setActive(null)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (answer === 'yes') {
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
    <div className='flex flex-wrap w-full gap-[20px] items-center justify-center'>
      {jobs?.map(job => {
        return (
          <Card className='min-w-sm flex flex-col bg-gray-200'>
            {loading && <p>loading changes...</p>}
            <CardContent className={"flex flex-col gap-[14px] max-w-sm"}>
              <Field>
                <FieldLabel>Company</FieldLabel>
                <FieldContent>{job?.company}</FieldContent>
              </Field>
              <Field>
                <FieldLabel>Role</FieldLabel>
                <p>{job?.role}</p>
              </Field>
              <Field>
                <FieldLabel>Status</FieldLabel>
                {/* <p>{job?.status}</p> */}
                <Field>
                  <NativeSelect value={active?._id === job?._id ? active.status : job.status} onChange={e => setActive({
                    _id: job._id,
                    status: e.target.value
                  })}>
                    <NativeSelectOption value="interview">Interview</NativeSelectOption>
                    <NativeSelectOption value="rejected">Rejected</NativeSelectOption>
                    <NativeSelectOption value="applied">Applied</NativeSelectOption>
                  </NativeSelect>
                  <Button onClick={handleStatusChange}>Change Status</Button>
                </Field>
              </Field>
              <div>
                <FieldLabel>Notes</FieldLabel>
                <div className='whitespace-nowrap overflow-hidden text-ellipsis'><p className=''>{job?.notes}</p></div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {
                setToDelete(job._id)
                const answer = window.prompt("Are you sure?, type yes to confirm")
                setAnswer(answer)
              }}>Delete this Job?</Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default DetailsPage