import {Outlet, Navigate} from 'react-router-dom'
import Sidebar from './Sidebar'
import {useUserContext} from './UserContext'

const ProtectedRoute = () => {
    const {token} = useUserContext()
    // console.log("tokne", token)
  return token ? <div className='flex gap-[20px]'>
    <Sidebar />
   <div className='w-full flex items-center justify-center'>
     <Outlet />
   </div>
  </div> : <Navigate to='/login' replace/>
}

export default ProtectedRoute