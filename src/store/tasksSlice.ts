import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Task } from "../Props";

interface TasksState {
  tasks: Task[];
}

// Define the initial state using that type
const initialState: TasksState = {
  tasks: [
    {
      id: 0,
      task: "Read book",
      date: new Date().toLocaleDateString(),
      closed: false,
      priority: 1,
      comment: "",
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.concat([
        {
          id: state.tasks.length,
          task: action.payload,
          date: new Date().toLocaleDateString(),
          comment: "",
          closed: false,
          priority: 1,
        },
      ]);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.task !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTasks = (state: RootState) =>
  state.tasks.tasks.map((item) => item.task);

export default tasksSlice.reducer;
