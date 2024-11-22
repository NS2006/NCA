import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'

//Router to navigate other pages

import Home from '../component/Home.jsx'
import Contribute from '../component/Contribute.jsx'
import PurchaseCC from '../component/PurchaseCC.jsx'
import Login from '../component/Login.jsx'
import Register from '../component/Register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/NCA",
    element: <Home/>,
  },
  {
    path: "/NCA/contribute",
    element: <Contribute/>,
  },
  {
    path: "/NCA/purchaseCC",
    element: <PurchaseCC/>,
  },
  {
    path: "/NCA/login",
    element: <Login/>,
  },
  {
    path: "/NCA/register",
    element: <Register/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
