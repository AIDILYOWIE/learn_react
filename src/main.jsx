import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App'
import { RouterProvider } from 'react-router/dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={App}/>
  </React.StrictMode>,
)
