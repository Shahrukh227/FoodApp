import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/Router/App'
import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
