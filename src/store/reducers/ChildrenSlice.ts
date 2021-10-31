import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addChild(state) {
      const newChild: IUser = {
        name: "",
        age: "",
      };
      state.children.push(newChild);
    },
    editChild(state, action: PayloadAction<{ idx: number; child: IUser }>) {
      state.children = state.children.map((child, idx) =>
        idx === action.payload.idx ? action.payload.child : child
      );
    },
    deleteChild(state, action: PayloadAction<{ idx: number }>) {
      state.children = state.children.filter(
        (_, idx) => idx !== action.payload.idx
      );
    },
  },
});

export const { addChild, editChild, deleteChild } = ChildrenSlice.actions;

export default ChildrenSlice.reducer;
