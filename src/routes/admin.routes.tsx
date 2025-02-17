import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


const adminPaths2 = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element:<AdminDashboard/>,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/createAdmin',
                element:<CreateAdmin/>,
            },
            {
                name: 'Create Faculty',
                path: '/admin/createFaculty',
                element:<CreateFaculty/>,
            },
            {
                name: 'Create Student',
                path: '/admin/createStudent',
                element:<CreateStudent/>,
            },
        ]
    }
]


const adminPaths = [
            {
                // path: "dashboard",
            path: "dashboard",
            element: <AdminDashboard/>
            },
            {
            path: "createStudent",
            element: <CreateStudent/>
            },
            
            {
            path: "createAdmin",
            element: <CreateAdmin/>
            },
            
            {
            path: "createFaculty",
            element: <CreateFaculty/>
            },

        
]
 
export default adminPaths;