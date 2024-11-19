import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Main styles with global scope and global styles
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
