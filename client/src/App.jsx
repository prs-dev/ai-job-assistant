import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Dashboard from './Dashboard'
import ProtectedRoute from "./ProtectedRoute"
import Login from './Login'
import Register from './Register'
import Sidebar from "./Sidebar"
import EntryForm from "./EntryForm"
import DetailsPage from "./DetailsPage"
import PublicRoute from "./PublicRoute"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<div>
              <Sidebar />
              <Dashboard />
            </div>} />
            <Route path="/form" element={<div>
              <Sidebar />
              <EntryForm />
            </div>} />
            <Route path="/status" element={<div>
              <Sidebar />
              <DetailsPage />
            </div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App