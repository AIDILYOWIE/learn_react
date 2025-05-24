import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (itemCart) => itemCart.id == action.payload.id
      );

      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions; // dengan export biasa akan akses ke fungsi addToCart
export default cartSlice.reducer; // kalo export default akan export reducer nya
