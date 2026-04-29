import { useNavigate } from "react-router-dom"
import { useUserContext } from "./UserContext"

const Navbar = () => {
  const {setToken, setUser, token, user} = useUserContext()
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken(null)
    setUser(null)
    navigate('/login')
  }
  return (
    <>
      <h2 className="text-xl cursor-pointer" onClick={() => navigate('/')}>AI Job Manager</h2>
      <ul className="flex gap-2 text-md">
        {token ? <>
          <li>Welcome <span className="underline">{user?.name}</span></li>
          <li className="cursor-pointer" onClick={handleLogout}>logout</li>
        </> : <>
          <li className="cursor-pointer" onClick={() => navigate('/login')}>Login</li>
          <li className="cursor-pointer" onClick={() => navigate('/register')}>Register</li>
        </>}
      </ul>
    </>
  )
}

export default Navbar