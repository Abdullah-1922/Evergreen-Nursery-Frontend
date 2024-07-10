import { Empty, Layout } from "antd";
import "../styles/layoutMenu.css";
import Navbar from "../components/ui/navbar/Navbar";
import { useGetProductsQuery } from "../redux/api/baseApi";
import Sidebar from "../components/ui/sidebar/Sidebar";
import Card, { TItem } from "../components/ui/card/card";

const { Content } = Layout;

const AllProducts = () => {
  const { data } = useGetProductsQuery(undefined);
  console.log(data);

  return (
    <div className="">
      <Layout className="min-h-screen bg-white">
        <Sidebar />
        <Layout>
          <Navbar />
          <Content className="" style={{ backgroundColor: "white" }}>
            <div
              style={{
                padding: 24,
              }}
            >
              {data?.data.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 ">
                  {data?.data?.map((item: TItem, ind: number) => (
                    <Card key={ind} item={item} />
                  ))}
                </div>
              ) : (
                <div className=" w-fit mx-auto">
                  <Empty
                    imageStyle={{ width: "350px", height: "350px" }}
                    className="text-xl  "
                  />
                </div>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AllProducts;
