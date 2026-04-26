import {Outlet, Navigate} from 'react-router-dom'

const PublicRoute = () => {
    const token = false
  return token ? <Navigate to='/' replace /> : <Outlet />
}

export default PublicRoute