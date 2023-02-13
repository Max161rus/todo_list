import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getStoredTodos, getStoredFilter } from '../service/service';

const initialState = {
  data: getStoredTodos(),
  filter: getStoredFilter()
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.data.push(payload);
    },

    deleteTodo: (state, { payload }) => {
      state.data.forEach((item, index) => {
        if (payload === item.id) {
          state.data.splice(index, 1)
        }
      });
    },

    allItemsToggle: (state, { payload }) => {
      state.data.forEach(item => item.activityFlag = payload)
    },

    switchingActivityItem: (state, { payload }) => {
      state.data.forEach(item => {
        if (item.id === payload) {
          item.activityFlag = !item.activityFlag;
        }
      });
    },

    savingChangesItem: (state, { payload }) => {
      state.data = payload;
    },

    deleteComplitedTodo: (state) => {
      state.data = state.data.filter(item => item.activityFlag);
    },

    toggleFilter: (state, { payload }) => {
      state.filter = payload;
    }
  }
})

export const filteredListAndCounterOfActiveItems = createSelector(
  ({ data }) => data.data,
  ({ data }) => data.filter,
  (data, filter) => {

    let countActiveTodo = 0;

    const filteredTodoList = data.filter(item => {

      if (item.activityFlag) {
        countActiveTodo++;
      }

      if (filter === 'All') {
        return true;
      }

      else if (filter === 'Active') {
        return item.activityFlag === true;
      }

      else {
        return item.activityFlag === false
      }

    });

    return {
      filteredTodoList,
      countActiveTodo
    }

  }
)

export const todoActions = todoSlice.actions;

