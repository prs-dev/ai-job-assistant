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
            <Route path='/' element={
              <Dashboard />
            } />
            <Route path="/form" element={
              <EntryForm />} />
            <Route path="/status" element={
              <DetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App