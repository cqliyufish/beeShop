import { publicRequest, userRequest } from "requsetMethod";
import {
  userDBFailed,
  userDBStart,
  loginSuccess,
  registerSuccess,
  updateUserSuccess,
} from "./user/userRedux";

export const register = async (dispatch, user) => {
  dispatch(userDBStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(userDBFailed());
  }
};
export const login = async (dispatch, user) => {
  dispatch(userDBStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(userDBFailed());
  }
};
export const updateUser = async (dispatch, user, id) => {
  console.log("try to updateUser: ", user, id);

  dispatch(userDBStart());
  try {
    const res = await userRequest.put("/user/" + id, user);
    console.log("updated: ", res.data);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(userDBFailed());
  }
};
