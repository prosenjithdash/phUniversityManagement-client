import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

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
        children: [
            {
                // path: "dashboard",
            index:true,
            element: <AdminDashboard/>
            },
            {
            path: "createStudent",
            element: <CreateStudent/>
            },
        
        ],
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