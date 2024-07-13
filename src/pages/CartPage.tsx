import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import CartWarning from "../utils/RefreshWarning";
import { useState } from "react";
import { Button, Modal } from "antd";
import { clearCart } from "../redux/features/Cart/cartSlice";
import Swal from "sweetalert2";

const CartPage = () => {
  const { CartProducts } = useAppSelector((state) => state.cartSlice);
  const totalPrice = CartProducts.reduce(
    (pre, curr) => pre + curr.price * curr.count,
    0
  );

  
const navigate =useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch =useAppDispatch()
  return (
    <div>
      <CartWarning />
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
                
                Product : {CartProducts.length}
              </p>
              <p className="text-lg  font-bold">
                Quantity :
                {CartProducts.reduce((acc, curr) => acc + curr.count, 0)}
              </p>
              <p className="text-xl  font-bold">Total Price : {totalPrice}</p>
              <button
                onClick={showModal}
                className="bg-[#4d6429] text-white px-6 rounded-lg w-full mt-3 py-1"
              >
                Checkout
              </button>

              <Modal 
               footer={[
                <Button
                  className="w-full bg-black text-white font-bold "
                  key="back"
                  onClick={handleCancel}
                >
                  Return
                </Button>,
              ]}
              open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={(e)=>{
       e.preventDefault()
       handleCancel()
       dispatch(clearCart())
       console.log(CartProducts);
       Swal.fire({
        title:'Product buy successfully',
        icon:'success'
       })
      
       navigate('/')

                }}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="mt-1 block text-lg border-2 py-1  pl-3 rounded-xl w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="mt-1 block text-lg border-2 py-1  pl-3 rounded-xl w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="mt-1 block text-lg border-2 py-1  pl-3 rounded-xl w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <Button 
                htmlType="submit"
                className="w-full text-white font-bold bg-[#4d6429]">Submit</Button>
                </form>
              </Modal>
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
