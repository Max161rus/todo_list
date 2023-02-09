import { createSlice } from '@reduxjs/toolkit';
import { getStoredTodos, getStoredFilter } from '../service/service';

const initialState = {
  data: getStoredTodos(),
  filter: getStoredFilter()
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {

    addTodo: (state, action) => {
      state.data.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.data.forEach((item, index) => {
        if (action.payload === item.id) {
          state.data.splice(index, 1)
        }
      });
    },

    allItemsToggle: (state, action) => {
      state.data.forEach(item => item.activityFlag = action.payload)
    },

    switchingActivityItem: (state, action) => {
      state.data.forEach(item => {
        if (item.id === action.payload) {
          item.activityFlag = !item.activityFlag;
        }
      });
    },

    savingChangesItem: (state, action) => {
      state.data = action.payload;
    },

    deleteComplitedTodo: (state, action) => {
      state.data = action.payload;
    },

    toggleFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
})