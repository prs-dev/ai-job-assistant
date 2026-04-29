import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Analysis = () => {
  return (
    <div className='w-full p-2 flex flex-col gap-[10px]'>
        <h2>AI Analysis</h2>
        <div>
            <Textarea className="w-full h-[200px]" placeholder="job description to analyse"/>
        </div>
        <div>
            <Button>Analyse</Button>
        </div>
    </div>
  )
}

export default Analysis