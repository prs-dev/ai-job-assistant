import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useUserContext } from '@/UserContext'
import useApi from '@/hooks/useApi'

//shadcn
import {Field, FieldLabel, FieldContent} from '@/components/ui/field'
import { Spinner } from './ui/spinner'

const Analysis = () => {
  const {token} = useUserContext()
  const [input, setInput] = useState('')
  const [res, setRes] = useState(null)
  const [loader, setLoader] = useState(false)
  const {aiAnalyse} = useApi()

  return (
    <div className='w-full p-2 flex flex-col gap-[10px]'>
        <h2>AI Analysis 🤖</h2>
        <div>
            <Textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-[200px]" placeholder="job description to analyse"/>
        </div>
        <div>
            <Button onClick={() => {
              setLoader(true)
              setRes(null)
              aiAnalyse(token, input)
              .then(data => {
                setRes(data)
                setLoader(false)
                setInput(null)
              })
            }}>Analyse</Button>
        </div>
        {loader && <div className='flex items-center gap-2'>
          <Spinner /><span>Processing response...</span>
        </div>}
        <div className='flex flex-col gap-[10px]'>
          {/* data */}
          {res && <>
            <Field>
              <FieldLabel>Summary</FieldLabel>
              <FieldContent>{res.summary}</FieldContent>
            </Field>
            <Field>
              <FieldLabel>Skills</FieldLabel>
              <FieldContent className="flex flex-row gap-2">{res.skills.map(item => <span className='border-1 p-[2px]'>{item}</span>)}</FieldContent>
            </Field>
            <Field>
              <FieldLabel>Keywords</FieldLabel>
              <FieldContent className="flex flex-row gap-2">{res.keywords.map(item => <span className='border-1 p-[2px]'>{item}</span>)}</FieldContent>
            </Field>
            <Field>
              <FieldLabel>Experience</FieldLabel>
              <FieldContent>{res.experience}</FieldContent>
            </Field>
            <Field>
              <FieldLabel>Additional Info</FieldLabel>
              <FieldContent>{res.additional_info}</FieldContent>
            </Field>
          </>}
        </div>
    </div>
  )
}

export default Analysis