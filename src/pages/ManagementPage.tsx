import { Layout } from "antd";
import Navbar from "../components/ui/navbar/Navbar";
import { Content } from "antd/es/layout/layout";

import ManagementSidebar from "../components/ui/sidebar/ManagementSidebar";
import { Outlet } from "react-router-dom";
import CartWarning from "../utils/RefreshWarning";

const ManagementPage = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
       <CartWarning/>
      <Layout className="min-h-screen  bg-white">
        <ManagementSidebar />

        <Layout>
          <Navbar />

          <Content className="" style={{ backgroundColor: "white" }}>
            <div
              style={{
                padding: 24,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ManagementPage;
