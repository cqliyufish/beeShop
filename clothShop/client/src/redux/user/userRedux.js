import { createSlice } from "@reduxjs/toolkit";
// createSlice can change initial state
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    userDBStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    userDBFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    ///////////////////////// log in ///////////////////////////
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },

    ///////////////////////// log out ///////////////////////////

    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
    ///////////////////////// register ///////////////////////////

    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },

    ////////////////////////////////////////// update user  //////////////////////////////////////////

    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser.others = action.payload;
    },
  },
});

export const {
  userDBFailed,
  userDBStart,
  loginSuccess,
  logOut,
  registerStart,
  registerFailed,
  registerSuccess,
  updateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
