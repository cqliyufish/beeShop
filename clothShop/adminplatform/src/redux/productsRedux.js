import { createSlice } from "@reduxjs/toolkit";
// createSlice can change initial state
const productsSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    ////////////////////////////////////////// get all products  //////////////////////////////////////////
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.error = false;
    },
    getProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    ////////////////////////////////////////// del products  //////////////////////////////////////////

    delProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    delProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((p) => p._id === action.payload),
        1
      );
      state.error = false;
    },
    delProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    ////////////////////////////////////////// update products  //////////////////////////////////////////

    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((p) => p._id === action.payload.id)
      ] = action.payload.product;

      state.error = false;
    },
    updateProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //////////////////////////////////////////  create products  //////////////////////////////////////////

    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.error = false;
    },
    addProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailed,
  delProductStart,
  delProductFailed,
  delProductSuccess,
  updateProductStart,
  updateProductFailed,
  updateProductSuccess,
  addProductStart,
  addProductFailed,
  addProductSuccess,
} = productsSlice.actions;
export default productsSlice.reducer;
