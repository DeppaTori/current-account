import { createSlice } from "@reduxjs/toolkit";
import { confirmationData } from "./constants";

const initialState = {
  value: 0,
  data: confirmationData,
  tasks: [],
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
      tasks[index].status = action.payload.status;
      state.task = tasks;
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  save,
  updateStatus,
  addTask,
} = accountSlice.actions;

export default accountSlice.reducer;
