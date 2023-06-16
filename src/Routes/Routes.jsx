import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoard from "../DashBoard/DashBoard";
import AllUsers from "../DashBoard/Admin/AllUsers";
import AddClasses from "../DashBoard/Instructor/AddClasses";
import PopulerClasses from "../Pages/Home/PopulerClasses/PopulerClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import MyClass from "../DashBoard/Student/MyClass";
import InstructorClass from "../DashBoard/Instructor/InstructorClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <DashBoard></DashBoard>
          },
          {
            path: '/dashboard/allUsers',
            element: <AllUsers/>
          },
          {
            path: '/dashboard/addclasses',
            element: <AddClasses/>
          },
          {
            path: '/dashboard/myclass',
            element: <MyClass></MyClass>
          },
          {
            path: '/dashboard/instructorclass',
            element: <InstructorClass/>
          }
        ]
      },

    ]
  },

  {
    path: '/*',
    element: <NotFound></NotFound>
  }
]);