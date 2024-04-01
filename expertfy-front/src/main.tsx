import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import pages
import Home from "./pages/Home/Home.tsx"
import Search from "./pages/Search/Search.tsx"
import Contact from "./pages/Contact/Contact.tsx"
import Signup from "./pages/RegisterUser/RegisterUser.tsx"
import EditUser from './pages/EditUser/EditUser.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/contact', element: <Contact /> },
      { path: '/signup', element: <Signup /> },
      { path: '/edituser/:id', element: <EditUser /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
