import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useUserContext } from '@/UserContext'
import useApi from '@/hooks/useApi'

//shadcn
import { Field, FieldLabel, FieldContent } from '@/components/ui/field'
import { Spinner } from './ui/spinner'
import { Input } from '@/components/ui/input'

const Analysis = () => {
  const { token } = useUserContext()
  const [input, setInput] = useState('')
  const [res, setRes] = useState(null)
  const [loader, setLoader] = useState(false)
  const [resume, setResume] = useState(null)
  const [filename, setFilename] = useState('')
  const [cover, setCover] = useState('')
  const { aiAnalyse, aiCover, uploadResume } = useApi()

  console.log("resume", resume)

  const handleFileUpload = async () => {
    if (resume) {
      const formData = new FormData()
      formData.append("resume", resume)
      const data = await uploadResume(token, formData)
      if(data) {
        setFilename(data.filename)
      }
      console.log(data)
    }
  }

console.log(filename, resume)

  return (
    <div className='w-full p-2 flex flex-col gap-[10px]'>
      <h2>AI Analysis 🤖</h2>
      <div>
        <Textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-[200px]" placeholder="job description to analyse" />
      </div>
      <div className='flex gap-2'>
        <FieldLabel htmlFor="file">Upload resume (optional)</FieldLabel>
        <Input id="file" className="hidden max-w-[200px]" type='file' onChange={e => setResume(e.target.files[0])} />
        <Button onClick={handleFileUpload}>Upload</Button>
      </div>
      <div>
        <Button onClick={() => {
          setLoader(true)
          setRes(null)
          aiAnalyse(token, input)
            .then(data => {
              setRes(data)
              setLoader(false)
              setInput('')
            })
        }}>Analyse</Button>
        <Button onClick={() => {
          setLoader(true)
          aiCover(token, input)
            .then(data => {
              setCover(data)
              setLoader(false)
              setInput('')
            })
        }}>Generate Cover Letter</Button>
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
      <div>
        {/* cover letter */}
        {cover && <p>{cover}</p>}
      </div>
    </div>
  )
}

export default Analysis