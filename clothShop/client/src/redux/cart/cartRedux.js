import { createSlice } from "@reduxjs/toolkit";
// createSlice can change initial state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], //[{productInfo, quantity}]
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.products.find(
        (prod) => prod._id === action.payload._id
      );

      if (existingItem) {
        state.products.map((cartItem) =>
          cartItem._id === existingItem._id
            ? (cartItem.quantity = cartItem.quantity + action.payload.quantity)
            : cartItem
        );
      } else {
        state.products.push({
          ...action.payload,
        });
      }

      state.total += action.payload.price * action.payload.quantity;
    },

    removeProduct: (state, action) => {
      const existingItem = state.products.find(
        (prod) => prod._id === action.payload
      );
      state.total -= existingItem.price * existingItem.quantity;
      state.products = state.products.filter(
        (cartItem) => cartItem._id !== action.payload
      );
    },

    delProduct: (state, action) => {
      // get the original quantity
      const prodQuantity = state.products.find(
        (prod) => prod._id === action.payload._id
      ).quantity;

      if (prodQuantity === 1) {
        // del the product from cart
        state.products = state.products.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
      } else {
        // decrease the product quatity
        state.products.map((cartItem) =>
          cartItem._id === action.payload._id
            ? (cartItem.quantity = cartItem.quantity - action.payload.quantity)
            : cartItem
        );
      }
      state.total -= action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, delProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
