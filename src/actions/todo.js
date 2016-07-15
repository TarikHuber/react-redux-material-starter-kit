import {v4} from 'node-uuid';

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_TODO_DIALOG_OPEN = 'SET_TODO_DIALOG_OPEN';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setTodoDialogOpen = (open) => {
  return {
    type: 'SET_TODO_DIALOG_OPEN',
    open: open,
  }
}