/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addCartProduct } from "../../../redux/features/Cart/cartSlice";

const AddToCardButton = ({ item }: { item: any }) => {
  const allCart = useAppSelector((state) => state.cartSlice.CartProducts);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        const selectedCard = allCart.find((cart: any) => cart._id === item._id);
        if (selectedCard && selectedCard.count >= item.stock) {
          return Swal.fire({
            title: "Cart cross the stock",
            icon: "error",
            confirmButtonText: "Back",
          });
        }

        if (item.stock == 0) {
          return Swal.fire({
            title: "Product is out of stock",
            icon: "error",
            confirmButtonText: "Back",
          });
        }

        dispatch(addCartProduct(item));
        Swal.fire({
          title: "Product added to Cart",
          icon: "success",

          confirmButtonText: "Back",
        });
      }}
      className=" hover:scale-110 flex transition delay-125 lg:inline-flex items-center group-hover:text-black text-white gap-3 group-hover:bg-white bg-[#4d6429] shadow-[10px_10px_150px_#4d6429] cursor-pointer px-1 py-1 sm:py-2 sm:px-4 text-sm font-semibold rounded-full "
    >
      Add to Cart
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/android/24/shopping-cart.png"
        alt="shopping-cart--v1"
      />
    </button>
  );
};

export default AddToCardButton;
