import Sider from "antd/es/layout/Sider";

   const Sidebar = () => {
     return (
        <Sider
          style={{ backgroundColor: "white" }}
          className="w-[250px] "
          breakpoint="lg"
          collapsedWidth="0"
          
        >
          <div className="w-full pt-10 h-full border-[6px] border-[#4d6429] ">
          <p className="w-fit border-b-2 border-black mx-auto text-[#4d6429] font-bold text-3xl">SIDEBAR</p>
              <div className=" mt-2 w-4/5 h-full mx-auto">

              </div>
          
          </div>
        </Sider>
     );
   };
   
   export default Sidebar;