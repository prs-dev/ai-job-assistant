import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './UserContext.jsx'
import { JobContextProvider } from './context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
