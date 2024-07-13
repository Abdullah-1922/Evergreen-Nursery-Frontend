



import { useEffect } from "react";
import {  useAppSelector } from "../redux/hooks";

const CartWarning = () => {
  const cartProducts = useAppSelector((state) => state.cartSlice.CartProducts);


  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartProducts.length > 0) {
        const message = 'You have items in your cart. If you refresh the page, your cart will be cleared.';
        event.preventDefault();
        event.returnValue = message; 
        return message; 
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);


    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartProducts]);

  return null; 
};

export default CartWarning;
