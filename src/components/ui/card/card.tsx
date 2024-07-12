/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Rate, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addCartProduct } from "../../../redux/features/Cart/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AddToCardButton from "../Button/AddToCardButton";

export type TItem = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  brand: string;
  status: "OUT-OF-STOCK" | "IN-STOCK";
};

const Card = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const allCart = useAppSelector((state) => state.cartSlice.CartProducts);

  const {
    _id,
    name,
    description,
    price,
    category,
    stock,
    image,

    rating,
    // brand,
    status,
  } = item;

  return (
    <div className="flex border-2 p-5 md:px-10 rounded-2xl   flex-col  justify-evenly  ">
      <div className="  mx-auto max-h-[400px] max-w-[350px]">
        <img className="rounded-[50px]" src={image} alt="" />
      </div>

      <div className="mt-3  ">
        <p className=" font-bold  text-[#4d6429] tracking-wider group-hover:text-white text-3xl">
          {name}
        </p>
        <p className=" font-semibold  text-[#4d6429] tracking-wider group-hover:text-white  text-xl">
          {category}
        </p>
        <p className="blueberry font-semibold mt-4 group-hover:text-white  ">
          {description.toString().substring(0, 100)}....
        </p>
        <div className="mt-6 ">
          <Rate count={5} defaultValue={rating} disabled></Rate>
          <div className="flex items-center mt-2 gap-3">
            <p className="text-lg text-[#4d6429]  font-semibold group-hover:text-white">
              ${price}
            </p>
            <p>
              <Tag className="font-bold">{status}</Tag>
            </p>
            <p className="font-bold">Stock: {stock}</p>
          </div>
          <div className="flex gap-3 pt-5">
            <button
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
              className=" hover:scale-110 transition delay-125 lg:inline-flex items-center group-hover:text-black text-white gap-3 group-hover:bg-white bg-[#1a5cc0] shadow-[10px_10px_150px_#4d6429] cursor-pointer sm:py-2 px-2 sm:px-4 text-sm font-semibold rounded-full "
            >
              Details
            </button>
           
            <AddToCardButton item={item}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
