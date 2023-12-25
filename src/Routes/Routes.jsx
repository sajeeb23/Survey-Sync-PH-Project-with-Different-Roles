import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Surveys/Notice";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import NoticeDescription from "../Pages/Surveys/NoticeDescription";
import CreateNotice from "../Pages/Surveys/CreateNotice";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard";
import ContactUs from "../Pages/Home/ContactUs";
import Gallery from "../Pages/Gallery/Gallery";


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
          element: <PrivateRoute><Notice></Notice></PrivateRoute>,
          loader: () => fetch('https://test-build-blond.vercel.app/survey')
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
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
          element: <CreateNotice></CreateNotice>
        },
        {
          path: '/notice/:_id',
          element: <NoticeDescription></NoticeDescription>,
          loader: () => fetch('https://test-build-blond.vercel.app/survey')
        },
        {
          path: '/studentdashboard',
          element: <StudentDashboard></StudentDashboard>
        },
        {
          path: 'contactus',
          element: <ContactUs></ContactUs>
        }
      ]
    },
  ]);