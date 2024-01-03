import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
