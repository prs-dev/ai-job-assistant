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
    <>
      <h2 onClick={() => navigate('/')}>AI Job Manager</h2>
      <ul className="flex gap-2 text-sm">
        {token ? <li onClick={handleLogout}>logout</li> : <>
          <li onClick={() => navigate('/login')}>Login</li>
          <li onClick={() => navigate('/register')}>Register</li>
        </>}
      </ul>
    </>
  )
}

export default Navbar