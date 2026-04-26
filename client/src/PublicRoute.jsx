import {Outlet, Navigate} from 'react-router-dom'

const PublicRoute = () => {
    const token = true
  return token ? <Navigate to='/' replace /> : <Outlet />
}

export default PublicRoute