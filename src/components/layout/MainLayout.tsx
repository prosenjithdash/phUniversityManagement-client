import { Layout, Menu, MenuProps, Slider } from "antd";
const { Header, Content, Footer } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Children, createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import adminPaths, { adminSidebarItems } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import Sidebar from "./sidebar";



// const items : MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
//     },
    
//     {
//         key: 'User Management',
//         label: 'User Management',
//         children: [
//             {
//                 key: 'Create Admin',
//                 label:<NavLink to="/admin/createAdmin">Create Admin</NavLink>,
//             },
//             {
//                 key: 'Create Faculty',
//                 label:<NavLink to="/admin/createFaculty">Create Faculty</NavLink>,
//             },
//             {
//                 key: 'Create Student',
//                 label:<NavLink to="/admin/createStudent">Create Student</NavLink>,
//             },
//         ],
        
//     },
// ];


const MainLayout = () => {
    return (
      <Layout style={{ height: '100vh' }}>
        
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
                <div style={{
                    color: 'white', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }} > 
            <h1>PH University</h1>            
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenerator(adminPaths, 'admin')} />
      </Sider> */}
        
        <Sidebar/>
      
      <Layout>
        <Header
         style={{ padding: 0,}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
                    >
            {/* This is the Mainlayout */}
            <Outlet/>
          </div>
        </Content>
        
      </Layout>
    </Layout>
    )
};

export default MainLayout;