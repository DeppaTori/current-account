import { createSlice } from "@reduxjs/toolkit";
import { confirmationData } from "./constants";

const initialState = {
  value: 0,
  data: confirmationData,
  tasks: [
    {
      ticketNumber: "0120223",
      createdDate: "04-08-2022",
      area: "Sudirman",
      email: "tiara@nicmail.com",
      application: "NEWACCOUNT",
      status: "Created",
    },
    {
      ticketNumber: "23455",
      createdDate: "05-08-2022",
      area: "Tangerang",
      email: "tiara@nicmail.com",
      application: "NEWACCOUNT",
      status: "Created",
    },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    save: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    updateStatus: (state, action) => {
      const index = action.payload.index;
      const tasks = [...state.tasks];
      console.log(index);
      tasks[index].status = action.payload.status;
      state.task = tasks;
    },
  },
});

export const { increment, decrement, incrementByAmount, save, updateStatus } =
  accountSlice.actions;

export default accountSlice.reducer;
