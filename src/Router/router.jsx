import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },

  {
    path: '/dashbord',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashbord',
        element: <h2>Hi</h2>,
      },
    ],
  },
]); 

export default router;