import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  show: Boolean;
}

const initialState: ModalState = {
  show: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalShow: (state) => {
      state.show = true;
    },
    modalHide: (state) => {
      state.show = false;
    },
  },
});

export const { modalShow, modalHide } = modalSlice.actions;

export default modalSlice.reducer;
