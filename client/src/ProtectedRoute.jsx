import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const token = false
  return token ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute