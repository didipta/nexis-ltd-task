import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Loginpage/Login";
import Loginfrom from "../Loginpage/Loginfrom";
import Signup from "../Signuppage/Signup";

export const routers=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Signup></Signup>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/home",
            element:<Home></Home>
        }
      ]
    }
])