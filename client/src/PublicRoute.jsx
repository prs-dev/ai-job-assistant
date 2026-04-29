import {Outlet, Navigate} from 'react-router-dom'
import {useUserContext} from './UserContext'

const PublicRoute = () => {
    const {token} = useUserContext()
  return token ? <Navigate to='/' replace /> : <div className='flex flex-col items-center justify-center h-full'>
  <div className='text-center text-3xl mb-[50px]'>
    Your Personal AI Job Management Assistant ✨
  </div>
  <Outlet />
  </div>
}

export default PublicRoute