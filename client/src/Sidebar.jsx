import {Link, useNavigate} from 'react-router-dom'

//have to manually style, since shadcn one -- too much hassle
const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <ul className='w-[200px] bg-gray-900 h-[calc(100vh-100px)] p-[10px] flex flex-col gap-[5px]'>
        <li className='cursor-pointer' onClick={() => navigate('/')}>Dashboard</li>
        <li className='cursor-pointer' onClick={() => navigate('/form')}>Job Entry Form</li>
        <li className='cursor-pointer' onClick={() => navigate('/status')}>Status and Job Details</li>
    </ul>
  )
}

export default Sidebar