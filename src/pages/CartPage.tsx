import { Rate, Tag } from "antd";

import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  const { CartProducts } = useAppSelector((state) => state.cartSlice);

  console.log(CartProducts);

  return (
    <div>
      <div className="text-2xl flex justify-center sm:text-3xl py-5 uppercase  p- text-[#4d6429] lg:text-4xl text-center font-semibold ">
        <h4 className="underline">My Carts</h4> ({CartProducts.length})
      </div>

      <div>
        {CartProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {CartProducts?.map((product, index) => (
              <div
                key={index}
                className="flex border-2 p-5 md:p-10 rounded-2xl   flex-col  justify-evenly  "
              >
                <div className="  mx-auto max-h-[400px] max-w-[350px]">
                  <img className="rounded-[50px]" src={product.image} alt="" />
                </div>

                <div className="mt-3  ">
                  <p className=" font-bold  text-[#4d6429] tracking-wider group-hover:text-white text-3xl">
                    {product.name}
                  </p>
                  <p className=" font-semibold  text-[#4d6429] tracking-wider group-hover:text-white  text-xl">
                    {product.category}
                  </p>
                  <p className="blueberry font-semibold mt-4 group-hover:text-white  ">
                    {product.category.toString().substring(0, 100)}....
                  </p>
                  <div className="mt-6 ">
                    <Rate
                      count={5}
                      defaultValue={product.rating}
                      disabled
                    ></Rate>
                    <div className="flex items-center mt-2 gap-3">
                      <p className="text-lg text-[#4d6429]  font-semibold group-hover:text-white">
                        ${product.price}
                      </p>
                      <p>
                        <Tag className="font-bold">{product.status}</Tag>
                      </p>
                    </div>
                    <div className="flex gap-3 pt-5">
                      <button
                        onClick={() => {
                          navigate(`/product/${product._id}`);
                        }}
                        className=" hover:scale-110 transition delay-125 lg:inline-flex items-center group-hover:text-black text-white gap-3 group-hover:bg-white bg-[#1a5cc0] shadow-[10px_10px_150px_#4d6429] cursor-pointer sm:py-2 px-2 sm:px-4 text-sm font-semibold rounded-full "
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-3xl md:text-4xl lg:text-5xl flex justify-center mt-24 items-center w-full  text-center">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
