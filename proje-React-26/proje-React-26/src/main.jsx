import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Tudo que irá aparecer na tela, estará no APp.jsx */}
    <App />
  </StrictMode>,
)
