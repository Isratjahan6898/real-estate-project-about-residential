import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Main/Root';
import Home from './Componets/Home/Home';
import UpdateProfile from './Componets/UpdateProfile/UpdateProfile';
import UserProfile from './Componets/UserProfile/UserProfile';
import ErrorPage from './Componets/ErrorPage/ErrorPage';
import Login from './Componets/Login/Login';
import Registation from './Componets/Registation/Registation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children :[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
         path:'/userProfile',
         element:<UserProfile></UserProfile>
      },

      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path:'/register',
        element:<Registation></Registation>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
