import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;