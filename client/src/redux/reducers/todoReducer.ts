import * as types from '../actions/todo/types';

import { ITodoState, Action } from '../../types';

const initialState: ITodoState = {
  todos: [],
  isLoading: true,
  err: null
};

export const todoReducer = (
  state = initialState,
  action: Action
): ITodoState => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state
      };
    case types.DELETE_TODO:
      return {
        ...state
      };
    case types.GET_ALL_TODO:
      return {
        ...state,
        isLoading: true
      };
    case types.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        isLoading: false,
        err: null
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
        isLoading: false,
        err: null
      };
    case types.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        err: null
      };
    case types.CLEAR_TODOS:
      return {
        todos: [],
        isLoading: true,
        err: null
      };
    default:
      return state;
  }
};
