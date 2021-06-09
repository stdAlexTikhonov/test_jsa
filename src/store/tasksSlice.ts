import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface TasksState {
  tasks: string[];
}

// Define the initial state using that type
const initialState: TasksState = {
  tasks: ["Task1", "Task2", "Task3", "Task4"],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.concat([action.payload]);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
