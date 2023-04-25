import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import './index.css'

import Home from '../src/containers/Home'
import Users from '../src/containers/Users'
import Comments from '../src/containers/Comments'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/usuarios",
        element: <Users /> 
      },
      {
        path: "/comentarios/:id",
        element: <Comments />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
