import { Empty, Layout } from "antd";
import "../styles/layoutMenu.css";
import Navbar from "../components/ui/navbar/Navbar";
import { useGetProductsQuery } from "../redux/api/baseApi";
import Sidebar from "../components/ui/sidebar/AllProductSidebar";
import Card, { TItem } from "../components/ui/card/card";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import PaginationTool from "../components/ui/pagination/Pagination";

const { Content } = Layout;

const AllProducts = () => {
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [isStock, setIsStock] = useState(false);
  const [priceSerial, setPriceSerial] = useState("default");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState<string | undefined>(undefined);

  const paginateInfo = useAppSelector((state) => state.paginateSlice);


  
  
  useEffect(() => {
    const params = new URLSearchParams();
    //check max price
    if (maxPrice !== null) {
      params.append("max", maxPrice.toString());
      if (maxPrice == 0) {
        params.delete("max");
      }
    }
    //check min price
    if (minPrice !== null) {
      params.append("min", minPrice.toString());
    }
    //check is only stock
    if (isStock === true) {
      params.append("stock", "only-stock");
    }
    if (isStock === false) {
      params.delete("stock");
    }
    //check ascending |  descending
    if (priceSerial === "ascending" || priceSerial === "descending") {
      if (priceSerial === "ascending") {
        params.append("sort", "price");
      } else {
        params.append("sort", "-price");
      }
    } else {
      params.delete("sort");
    }
    //check category
    if (category) {
      const categoryForParams = category.replace(/\s+/g, ",");

      params.append("category", categoryForParams);
      if (category == "Default") {
        params.delete("category");
      }
    }
    params.append("page", paginateInfo.page.toString());
    params.append("limit", paginateInfo.limit.toString());
    setQuery(params.toString());
  }, [maxPrice, minPrice, isStock, priceSerial, category,paginateInfo]);

  const { data } = useGetProductsQuery(query);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Layout hasSider className="min-h-screen  bg-white">
        <Sidebar
          setMaxPrice={setMaxPrice}
          isStock={isStock}
          setIsStock={setIsStock}
          setMinPrice={setMinPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setPriceSerial={setPriceSerial}
          priceSerial={priceSerial}
          setCategory={setCategory}
        />
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
            <div className="w-fit mx-auto pb-10">

            <PaginationTool totalPage={data?.meta?.total}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AllProducts;
