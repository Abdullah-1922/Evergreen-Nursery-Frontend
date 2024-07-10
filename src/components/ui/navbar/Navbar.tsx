import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import Button from "../Button/ButtonMain";

const Navbar = () => {
  return (
 
        <Header className="bg-[#D7EEB3]  h-16">
      <div className="flex   mt-3 justify-center items-center gap-4">
        <NavLink to={'/'}>
          <Button innerText="home" />
        </NavLink> 
        <NavLink to={'/products'}>
          <Button innerText="products" />
        </NavLink> 
      </div>
   
      
    </Header>

  
  );
};

export default Navbar;
