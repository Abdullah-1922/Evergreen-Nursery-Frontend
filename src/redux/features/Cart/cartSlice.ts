import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  brand: string;
  updatedAt: string;
  status: "OUT-OF-STOCK" | "IN-STOCK";
}
interface TCart extends TProduct {
  count: number;
}

type TInitialState = {
  CartProducts: TCart[];
};

const initialState: TInitialState = {
  CartProducts: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.CartProducts.find(
        (prod) => prod._id == action.payload._id
      );
      if(existingProduct){
        state.CartProducts =state.CartProducts.map((prod)=>
          prod._id === action.payload._id ? {...prod,count: (prod.count || 1) +1}: prod
        )
      }else{
         state.CartProducts.push({ ...action.payload, count: 1 });
      }
        
     
    },
  },
});

export const { addCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
