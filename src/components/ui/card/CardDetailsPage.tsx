import { Rate, Tag } from "antd";

import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../redux/api/baseApi";
import AddToCardButton from "../Button/AddToCardButton";

export type TItem = {
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

const CardDetailPage = () => {
  const queryParams = useParams();
  const productId = queryParams.id;
  console.log(queryParams.id);
  const { data = [], isLoading } = useGetSingleProductQuery(productId);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const {
    name,
    description,
    price,
    category,
    stock,
    image,
    rating,
    // brand,
    status,
  } = data.data;

  return (
    <div>
      <p className="text-2xl  py-10 text-center md:text-3xl lg:text-4xl underline font-bold text-[#4d6429] group-hover:text-white">
        Product details
      </p>

      <div className="md:w-[90%] border-2 p-10 px-5 mx-auto justify-evenly gap-5 md:gap-8 lg:gap-10  flex flex-col lg:flex-row  ">
        <div className="md:w-[90%] flex mx-auto flex-1 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center  ">
          <p className=" font-bold  text-[#4d6429] tracking-wider group-hover:text-white text-3xl">
            {name}
          </p>
          <p className=" font-semibold  text-[#4d6429] tracking-wider group-hover:text-white  text-xl">
            {category}
          </p>
          <p className="blueberry font-semibold mt-4 group-hover:text-white  ">
            {description}
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
              <p className="font-bold text-lg">Stock: {stock}</p>
            </div>
            <div className="flex gap-3 pt-5">
              <AddToCardButton item={data.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
