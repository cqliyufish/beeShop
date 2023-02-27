import { publicRequest, userRequest } from "requsetMethod";
import {
  userDBStart,
  userDBFailed,
  loginSuccess,
  delUserSuccess,
  updateUserSuccess,
} from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailed,
  delProductFailed,
  delProductSuccess,
  delProductStart,
  updateProductStart,
  updateProductFailed,
  updateProductSuccess,
  addProductStart,
  addProductFailed,
  addProductSuccess,
} from "./productsRedux";
import { redirect } from "react-router-dom";

// admin log in
export const login = async (dispatch, user) => {
  dispatch(userDBStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(userDBFailed());
  }
};

// get products
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    // console.log("get product success:", res.data);

    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailed());
  }
};

// del product by id
export const delProducts = async (dispatch, id) => {
  dispatch(delProductStart());
  try {
    await userRequest.delete("/products/" + id);
    dispatch(delProductSuccess(id));
  } catch (err) {
    dispatch(delProductFailed());
  }
};

// update product by id
export const updateProducts = async (dispatch, product, id) => {
  // console.log("updateproduct: ", product);

  dispatch(updateProductStart());
  try {
    const res = await userRequest.put("/products/" + id, product);
    // console.log("update: ", res.data);
    dispatch(updateProductSuccess({ id, product: res.data }));
  } catch (err) {
    dispatch(updateProductFailed());
  }
};

// add product
export const addProducts = async (dispatch, product) => {
  // console.log("product", product);
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);
    // console.log("post to add product success", res.data);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailed());
  }
};

// del user by id
export const delUser = async (dispatch, id) => {
  dispatch(userDBStart());
  try {
    await userRequest.delete("/user/" + id);
    dispatch(delUserSuccess(id));
  } catch (err) {
    dispatch(userDBFailed());
  }
};
// update product by id
export const updateUser = async (dispatch, user, id) => {
  console.log("try to updateUser: ", user, id);

  dispatch(userDBStart());
  try {
    const res = await userRequest.put("/user/" + id, user);
    // console.log("update: ", res.data);
    dispatch(updateUserSuccess());
  } catch (err) {
    dispatch(userDBFailed());
  }
};
