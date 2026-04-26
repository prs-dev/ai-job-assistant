import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Dashboard from './Dashboard'
import ProtectedRoute from "./ProtectedRoute"
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App