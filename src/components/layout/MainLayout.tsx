

import {  Outlet } from "react-router-dom";

import { Layout } from "antd";
import Navbar from "../ui/navbar/Navbar";
import CartWarning from "../../utils/RefreshWarning";



const { Content } = Layout;
function MainLayout() {
  
  return (
    <div className="max-w-[1400px]  mx-auto ">
      <CartWarning/>
      <Layout className="min-h-screen ">
        <Navbar />
        <Content style={{ padding: "",backgroundColor:'white'}}>
          <Outlet/>
        </Content>
      </Layout>
    </div>
  );
}

export default MainLayout;
