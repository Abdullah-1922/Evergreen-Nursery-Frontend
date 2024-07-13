import { useAppSelector } from "../redux/hooks";
import { NavLink } from "react-router-dom";
import CartWarning from "../utils/RefreshWarning";

const CartPage = () => {
  const { CartProducts } = useAppSelector((state) => state.cartSlice);
  const totalPrice = CartProducts.reduce(
    (pre, curr) => pre + curr.price * curr.count,
    0
  );

  console.log(CartProducts);

  return (
    <div>
       <CartWarning/>
      <div className="text-2xl flex justify-center sm:text-3xl py-5 uppercase  p- text-[#4d6429] lg:text-4xl text-center font-semibold ">
        <h4 className="underline">My Carts</h4> ({CartProducts.length})
      </div>

      <div>
        {CartProducts.length > 0 ? (
          <div className="flex gap-10 lg:flex-row justify-start flex-col-reverse">
            <div className=" flex flex-col flex-1  gap-5">
              {CartProducts?.map((product, index) => (
                <div
                  className="w-[350px] md:w-[450px] bg-[#f4f8f0] p-3 flex justify-center items-center mx-auto h-[180px] "
                  key={index}
                >
                  <img
                    className="w-[150px] h-[120px]"
                    src={product.image}
                    alt=""
                  />
                  <div className=" px-4 font-bold ">
                    <p>Quantity : {product.count}</p>
                    <p>title : {product.name}</p>
                    <p>price : ${product.price}</p>
                    <NavLink to={`/product/${product._id}`}>
                      <p className="text-blue-600 underline cursor-pointer">
                        Details
                      </p>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[300px] p-5 mx-auto h-[200px]  bg-[#f4f8f0]">
              <p className="text-lg  font-bold">
                {" "}
                Product : {CartProducts.length}
              </p>
              <p className="text-lg  font-bold">
                Quantity :
                {CartProducts.reduce((acc, curr) => acc + curr.count, 0)}
              </p>
              <p className="text-xl  font-bold">Total Price : {totalPrice}</p>
              <button className="bg-[#4d6429] text-white px-6 rounded-lg w-full mt-3 py-1">
                Pay
              </button>
            </div>
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
