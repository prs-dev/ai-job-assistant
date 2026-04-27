import { useNavigate } from "react-router-dom"
import { useUserContext } from "./UserContext"

const Navbar = () => {
  const {setToken, setUser, token} = useUserContext()
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken(null)
    setUser(null)
    navigate('/login')
  }
  return (
    <div>
      <h2 onClick={() => navigate('/')}>Job Manager</h2>
      <ul>
        {token ? <li onClick={handleLogout}>logout</li> : <>
          <li onClick={() => navigate('/login')}>Login</li>
          <li onClick={() => navigate('/register')}>Register</li>
        </>}
      </ul>
    </div>
  )
}

export default Navbar