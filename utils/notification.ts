import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NotificationState {
  show: Boolean;
}

const initialState: NotificationState = {
  show: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notificationShow: (state) => {
      state.show = true;
    },
    notificationHide: (state) => {
      state.show = false;
    },
  },
});

export const { notificationShow, notificationHide } = notificationSlice.actions;

export default notificationSlice.reducer;
