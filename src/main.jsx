import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContentProvider } from './context/TaskContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContentProvider>
    <App />
    </TaskContentProvider>
    
  </React.StrictMode>,
)
