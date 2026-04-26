import {Outlet, Navigate} from 'react-router-dom'
import Sidebar from './Sidebar'

const ProtectedRoute = () => {
    const token = false
  return token ? <div>
    <Sidebar />
    <Outlet />
  </div> : <Navigate to='/login' replace/>
}

export default ProtectedRoute