/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { useNavigate } from "react-router-dom";
import { addCartProduct } from "../../../redux/features/Cart/cartSlice";

const HomePageCards = () => {
  const allCart = useAppSelector((state) => state.cartSlice.CartProducts);
  const dispatch = useAppDispatch();
  const params = new URLSearchParams();

  const navigate = useNavigate();

  params.append("limit", "3");
  params.toString();
  const { data, isLoading } = useGetProductsQuery(params);
  console.log(data);
  if (isLoading) {
    return <div className="text-3xl">Loading.....</div>;
  }

  return (
    <section>
      <div className="pb-20 pt-10">
        <p className="text-3xl font-extrabold uppercase w-fit mx-auto">
          Our featured products
        </p>

        <div className="grid  grid-cols-1 pt-20 mx-auto justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((prod: any, ind: number) => (
            <div
              key={ind}
              className="group relative isolate w-[340px] h-[300px] flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={prod?.image}
                alt={prod?.name}
                className="absolute inset-0 h-full  object-cover transition-transform duration-300 group-hover:blur-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                {prod?.name}
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {prod?.category}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      const selectedCard = allCart.find(
                        (cart: any) => cart._id === prod._id
                      );
                      if (selectedCard && selectedCard.count >= prod.stock) {
                        return Swal.fire({
                          title: "Cart cross the stock",
                          icon: "error",
                          confirmButtonText: "Back",
                        });
                      }

                      if (prod.stock == 0) {
                        return Swal.fire({
                          title: "Product is out of stock",
                          icon: "error",
                          confirmButtonText: "Back",
                        });
                      }

                      dispatch(addCartProduct(prod));
                      Swal.fire({
                        title: "Product added to Cart",
                        icon: "success",
                        confirmButtonText: "Back",
                      });
                    }}
                    className="text-white p-4 rounded-full hover:scale-125 transition-transform duration-300"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/product/${prod._id}`);
                    }}
                    className="text-white p-4 rounded-full hover:scale-125 transition-transform duration-300"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageCards;
