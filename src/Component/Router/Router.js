import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Signuppage/Signup";

export const routers=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
            path:"/signup",
            element:<Signup></Signup>
        }
      ]
    }
])