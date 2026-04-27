import {Outlet, Navigate} from 'react-router-dom'
import {useUserContext} from './UserContext'

const PublicRoute = () => {
    const {token} = useUserContext()
  return token ? <Navigate to='/' replace /> : <Outlet />
}

export default PublicRoute