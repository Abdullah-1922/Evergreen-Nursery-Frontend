import { Checkbox, Flex, Radio, Select, Slider } from "antd";
import Sider from "antd/es/layout/Sider";
import { categorySelect } from "./sidebar.constant";

const Sidebar = ({ ...props }) => {
  const {
    setMaxPrice,
    setMinPrice,
    setIsStock,
    minPrice,
    maxPrice,

    setPriceSerial,
    setCategory,
  } = props;
  const numMinValue = Number(minPrice) === 0 ? undefined : Number(minPrice);
  const numMaxValue = Number(maxPrice) === 0 ? undefined : Number(maxPrice);

  return (
    <Sider
      style={{ backgroundColor: "#DCFFCB" }}
      
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="static lg:fixed w-[200px] mt-[64px] bg-white pt-10 h-full border-[6px] border-[#4d6429] ">
        {/* <p className="w-fit border-b-2 border-black mx-auto text-[#4d6429] font-bold text-3xl">
          
        </p> */}
        <div className=" mt-2 w-4/5 h-full mx-auto">
          <div>
            <div>
              <label className="font-bold" htmlFor="min">
                Min price
              </label>
              <input
                value={numMinValue}
                min={0}
                max={numMaxValue}
                className="w-full  border-2 pl-2 font-semibold rounded-lg  border-[#4d6429]"
                onChange={(e) => {
                  if (Number(e.target.value) < 0) {
                    e.target.value = "0";
                  } else if (Number(e.target.value) > (numMaxValue as number)) {
                    e.target.value = maxPrice;
                  }
                  setMinPrice(Number(e.target.value));
                }}
                type="number"
              />
            </div>
            <div>
              <label htmlFor="max " className="font-bold">
                Max price
              </label>
              <input
                value={numMaxValue}
                max={100000}
                className="w-full border-2 pl-2 font-semibold rounded-lg  border-[#4d6429] "
                onChange={(e) => {
                  if (Number(e.target.value) > 100000) {
                    e.target.value = "100000";
                  }
                  setMaxPrice(Number(e.target.value));
                }}
                type="number"
              />
            </div>
            <p className="font-bold mt-3"> Price range</p>
            <Slider
              min={0}
              max={100000}
              value={[minPrice, maxPrice]}
              onChange={(value: number[]) => {
                setMinPrice(value[0]), setMaxPrice(value[1]);
              }}
              range={{ draggableTrack: false }}
            />

            <div className="font-semibold  mb-6 w-fit border px-3  rounded-xl pb-[2px]  border-[#4d6429]  text-lg">
              In Stock
              <Checkbox
                className="ml-2"
                onChange={(e) => {
                  setIsStock(e.target.checked);
                }}
              />
            </div>
            <div className="font-semibold mt-3 w-fit  pb-[6px]  text-lg">
              <p>Price </p>
              <Flex className="" vertical gap="middle">
                <Radio.Group
                  onChange={(e) => {
                    setPriceSerial(e.target.value);
                  }}
                  className="flex flex-col gap-2"
                  defaultValue="default"
                >
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="ascending">Ascending</Radio.Button>
                  <Radio.Button value="descending">Descending</Radio.Button>
                </Radio.Group>
              </Flex>
            </div>
            <div className="mt-3">
              <p className="font-bold border-b-2 mb-3 w-fit  pb-[2px]  border-[#4d6429]">
                Select category
              </p>
              <Select
                defaultValue="Select category"
                style={{
                  width: 150,
                }}
                onChange={(value) => {
                  setCategory(value);
                }}
                options={categorySelect}
              />
            </div>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
