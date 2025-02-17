import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import adminPaths from "./admin.routes";

const router = createBrowserRouter([

  {
    path: "/",
        element: <App />,
        children: [
            {
            path: "about",
            element: <About/>
            },
            {
            path: "contact",
            element: <Contact/>
            },
        
        ],
    },

    // For Admin

    {
    path: "/admin",
        element: <App />,
        children: adminPaths,
    },

    // For Faculty

    {
    path: "/faculty",
        element: <App />,
        children: adminPaths,
    },

    // For Student

    {
    path: "/student",
        element: <App />,
        children: adminPaths,
    },

    // Global
    
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    
]);

export default router;