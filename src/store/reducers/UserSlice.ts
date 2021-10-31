import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState extends IUser {}

const initialState: UserState = {
  name: "",
  age: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser(state, action: PayloadAction<{ user: IUser }>) {
      state.age = action.payload.user.age;
      state.name = action.payload.user.name;
    },
  },
});

export const { editUser } = UserSlice.actions;

export default UserSlice.reducer;
