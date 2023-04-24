import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Services from './components/Services/Services'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: 'service',
    element: <Services />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
