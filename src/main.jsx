import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import WorkOpportunityPopup from './components/WorkOpportunityPopup.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WorkOpportunityPopup />
  </StrictMode>,
)
