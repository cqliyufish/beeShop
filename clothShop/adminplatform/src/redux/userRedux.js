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
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    userDBFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = true;
    },

    ////////////////////////////////////////// del user  //////////////////////////////////////////

    delUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
    ////////////////////////////////////////// update user  //////////////////////////////////////////

    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  userDBStart,
  userDBFailed,
  loginSuccess,
  logOut,

  delUserSuccess,
  updateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
