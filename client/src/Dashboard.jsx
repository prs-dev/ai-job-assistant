import React from 'react'
import { useJobContext } from './context/JobContext'

//shadcn
import {Card, CardTitle, CardHeader, CardDescription, CardContent} from './components/ui/card'
import { Spinner } from './components/ui/spinner'

const Dashboard = () => {
  const {summary, loading} = useJobContext()
  // console.log("summary", summary)
  return (
    <div className='w-full flex gap-[10px]'>
      <Card className="w-[10rem] bg-gray-200 text-gray-800 flex-1 max-h-[150px] flex items-center justify-center">
        <CardHeader className="text-center text-lg font-semibold w-full">Total Jobs</CardHeader>
        <CardContent className="text-center flex">{summary?.totalCount?.[0].totalJobs}</CardContent>
      </Card>
      <Card className="w-[10rem] bg-gray-200 text-gray-800 flex-1 max-h-[150px] flex items-center justify-center">
        <CardHeader className="text-center text-lg font-semibold w-full">By Status</CardHeader>
        <CardContent className="text-center w-full">
          <div className='flex items-center justify-evenly'>{summary?.status?.map(item => <div className='flex flex-col'>
          <p>{item._id}</p>
          <p>{item.totalJobs}</p>
        </div>)}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard