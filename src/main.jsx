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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
