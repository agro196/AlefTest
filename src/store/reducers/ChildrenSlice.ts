import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface ChildrenState {
  children: IUser[];
}

const initialState: ChildrenState = {
  children: [],
};

export const ChildrenSlice = createSlice({
  name: "children",
  initialState,
  reducers: {},
});

export default ChildrenSlice.reducer;
