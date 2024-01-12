import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ZET STRICTMODE UIT OM DUBBELE RENDER TE VOORKOMEN IN DE CONSOLE

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
