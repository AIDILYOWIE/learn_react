import { useState } from 'react'
import { FormLogin } from './Components/Fragments/FormLogin'
import { Login } from './Pages/login'
import { Register } from './Pages/register'
import { createBrowserRouter } from 'react-router'

 const App = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])

export default App

