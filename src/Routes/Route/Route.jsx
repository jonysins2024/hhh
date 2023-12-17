import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Chackout from "../../Components/Chackout/Chackout";
import Buy_Now from "../../Components/Buy_Now/Buy_Now";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/Chackout",
        element: <Chackout></Chackout>
      },
      {
        path: "/shipping",
        element: <Buy_Now></Buy_Now>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />
  },
])
