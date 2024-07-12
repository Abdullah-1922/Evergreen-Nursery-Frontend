import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink } from "react-router-dom";

const ManagementSidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      style={{ backgroundColor: "#DCFFCB" }}
      collapsedWidth="0"
    >
      <div className="static lg:fixed w-[200px] mt-[64px] bg-white pt-3 h-full border-[6px] border-[#4d6429]">
        <p className="text-2xl text-center border-b-[3px] pb-1 border-[#4d6429]  font-bold text-[#4d6429]">
          Management
        </p>

        <div className="flex flex-col gap-4 mt-3">
          <NavLink to={"/management/manage-products"}>
            <Button className="w-full font-bold h-[40px] text-lg   ">
              Manage Product
            </Button>
          </NavLink>
          <NavLink to={"/management/create-product"}>
            <Button className="w-full font-bold h-[40px] text-lg   ">
              Create Product
            </Button>
          </NavLink>
        </div>
      </div>
    </Sider>
  );
};

export default ManagementSidebar;
