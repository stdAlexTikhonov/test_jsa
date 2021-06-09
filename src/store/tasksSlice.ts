import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Task } from "../Props";

type TasksState = {
  tasks: {
    [key: string]: Task;
  };
};

// Define the initial state using that type
const initialState: TasksState = {
  tasks: {
    "0": {
      id: "0",
      task: "Read book",
      date: new Date().toLocaleDateString(),
      closed: false,
      priority: 1,
      comments: ["Это тестовый комментарий"],
      finished: false,
    },
  },
};

export const tasksSlice = createSlice({
  name: "tasks_slice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks[Object.keys(state.tasks).length] = {
        id: Object.keys(state.tasks).length.toString(),
        task: action.payload,
        date: new Date().toLocaleDateString(),
        comments: [],
        closed: false,
        priority: 1,
        finished: false,
      };
    },
    removeTask: (state, action: PayloadAction<string>) => {
      delete state.tasks[action.payload];
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks[action.payload];
      const new_task = Object.assign({}, task, { closed: !task.closed });
      state.tasks[action.payload] = new_task;
    },
    addComment: (
      state,
      action: PayloadAction<{ id: string; comment: string }>
    ) => {
      const task = state.tasks[action.payload.id];
      const new_task = Object.assign({}, task, {
        comments: task.comments.concat([action.payload.comment]),
      });
      state.tasks[action.payload.id] = new_task;
    },
    setFinished: (state, action: PayloadAction<string>) => {
      const task = state.tasks[action.payload];
      const new_task = Object.assign({}, task, { finished: true });
      state.tasks[action.payload] = new_task;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, toggleTask, addComment, setFinished } =
  tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTasksIds = (state: RootState) =>
  Object.keys(state.tasks.tasks).sort(
    (a, b) => state.tasks.tasks[a].priority - state.tasks.tasks[b].priority
  );

// Other code such as selectors can use the imported `RootState` type
export const getTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
