import {Link, useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <ul>
        <li onClick={() => navigate('/')}>Dashboard</li>
        <li onClick={() => navigate('/form')}>Job Entry Form</li>
        <li onClick={() => navigate('/status')}>Status and Job Details</li>
    </ul>
  )
}

export default Sidebar