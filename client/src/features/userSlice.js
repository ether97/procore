import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  firstName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const user = action.payload;
      console.log(user);
      state._id = user._id;
      state.firstName = user.firstName;
    },
    logoutUser(state) {
      state._id = "";
      state.firstName = "";
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
