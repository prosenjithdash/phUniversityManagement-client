import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


// type TRoute = {
//     path: string,
//     element: ReactNode;
// }

// type TSidebarItem = {
//     key: string;
//     label: ReactNode;
//     children?: TSidebarItem[];
// };

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element:<AdminDashboard/>,
    },
    {
        name: 'Academic Management',
         children: [
            {
                name: 'Create Admin',
                path: 'createAdmin',
                element:<CreateAdmin/>,
            },
            {
                name: 'Create Faculty',
                path: 'createFaculty',
                element:<CreateFaculty/>,
            },
            {
                name: 'Create Student',
                path: 'createStudent',
                element:<CreateStudent/>,
            },
        ]
        
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'createAdmin',
                element:<CreateAdmin/>,
            },
            {
                name: 'Create Faculty',
                path: 'createFaculty',
                element:<CreateFaculty/>,
            },
            {
                name: 'Create Student',
                path: 'createStudent',
                element:<CreateStudent/>,
            },
        ]
    }
]


// export const adminSidebarItems = adminPaths.reduce((acc:TSidebarItem[], item) => {

//     if (item.path && item.name) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name} </NavLink>,
//         });
        
//  }

//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name, 
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
                
//             }))
//         })
//     }
   
//     return acc;

// }, []);

//* Programatical way

//  export const adminRoutes = adminPaths.reduce((acc:TRoute[], item) => {

//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
        
        
//     }

//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//             path: child.path,
//             element: child.element,
//         })
//         })
//     }
   
//     return acc;

// }, []);


//! Hard coded way

// const adminPaths = [
//             {
//                 // path: "dashboard",
//             path: "dashboard",
//             element: <AdminDashboard/>
//             },
//             {
//             path: "createStudent",
//             element: <CreateStudent/>
//             },
            
//             {
//             path: "createAdmin",
//             element: <CreateAdmin/>
//             },
            
//             {
//             path: "createFaculty",
//             element: <CreateFaculty/>
//             },

        
// ]
 
export default adminPaths;