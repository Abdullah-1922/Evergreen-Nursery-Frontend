/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Rate } from "antd";

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
  const navigate = useNavigate();

  const {
    _id,
    name,

    price,

    stock,
    image,
    rating,
    status,
  } = item;

  return (
    <div className=" py-10 flex  items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl  ">
        <img
          className="h-[250px] w-full object-cover object-end"
          src={image}
          alt={name}
        />
        <div className="p-6">
          <div className="flex items-baseline">
            <span className={`inline-block   py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide ${stock === 0 ? 'bg-red-500 text-white': 'bg-[#dcffcb] text-black'}`}>
              {status === "IN-STOCK" ? "Available" : "Out of Stock"}
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {stock} in stock
            </div>
          </div>
          <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
            {name}
          </h4>
          <div className="mt-1">
            <span>${price}</span>
            <span className="text-gray-600 text-sm"> per item</span>
          </div>
          <div className="mt-2 flex items-center">
            <Rate count={5} defaultValue={rating} disabled></Rate>
            
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => navigate(`/product/${_id}`)}
              className="hover:scale-110 transition delay-125 lg:inline-flex items-center text-white gap-3 bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer py-2 px-4 text-sm font-semibold rounded-full"
            >
              Details
            </button>
            <AddToCardButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
