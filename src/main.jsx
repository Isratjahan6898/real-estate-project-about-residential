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

import ErrorPage from './Componets/ErrorPage/ErrorPage';
import Login from './Componets/Login/Login';
import Registation from './Componets/Registation/Registation';
import AuthProvider from './Providers/AuthProvider';
import Contact from './Componets/Contact/Contact';
import Blog from './Componets/Blog/Blog';
import ViewProperty from './Componets/ViewProperty/ViewProperty';
import PrivateRoute from './Componets/PrivateRoute/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';

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
         path:'/contact',
         element:<Contact></Contact>
      },

      {
        path:'/blog',
        element:<Blog></Blog>
     },


      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path:'/register',
        element:<Registation></Registation>
      },

      {
        path:'/category/:id',
        element:<PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>,
        loader:()=>fetch ('resident.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
