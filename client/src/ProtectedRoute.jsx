import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const token = true
  return token ? <Outlet /> : <Navigate to='/login' replace/>
}

export default ProtectedRoute