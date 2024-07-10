

import { NavLink } from "react-router-dom";

import { Layout } from "antd";
import Navbar from "./components/ui/navbar/Navbar";
import Button from "./components/ui/Button/ButtonMain";

const { Content } = Layout;
function App() {
  return (
    <div className="max-w-[1400px]  mx-auto ">
      <Layout className="min-h-screen ">
        <Navbar />
        <Content style={{ padding: "0 48px",backgroundColor:'white'}}>
          <div >
            <h1 className="">Hello from nn</h1>
            <NavLink to={"/products"}>
              <Button innerText="kkkkkkkkk"></Button>
            </NavLink>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
