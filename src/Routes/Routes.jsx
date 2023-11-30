import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Surveys from "../Pages/Surveys/Surveys";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import CreateSurveys from "../Pages/Surveys/CreateSurveys";
import ProUser from "../Pages/ProUser/ProUser";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/surveys',
          element: <Surveys></Surveys>,
          loader: () => fetch('https://assignment-12-server-efpbudk56-sjb.vercel.app/survey')
        },
        {
          path: '/proUser',
          element: <ProUser></ProUser>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: '/users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/createsurvey',
          element: <CreateSurveys></CreateSurveys>
        }
      ]
    },
  ]);