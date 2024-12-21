import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/Home";
import AuthLayout from "./_auth/AuthLayout";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
    { path: "/", 

        element: (
            <ProtectedRoute>
                <RootLayout/>
            </ProtectedRoute>
        ),
        children:[
            { path: "", element: <Home/> },
            
        ]
    },
    // show firt auth then rootlayout
    // otherwise show auth layout first and then rootlayout
    { path: "auth/", 
        element: <AuthLayout/>,
        children:[
            { path: "login", element: <Login/> },
            { path: "signup", element: <SignUp/> },
            
        ]
    },
   
])

export default router;