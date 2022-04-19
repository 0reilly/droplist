import { Dispatch } from 'react';

import * as types from './types';

import { Todo } from '../../../types';
import { setSnackBar } from '../ui/actions';

import * as todoAPI from '../../../api/todo';

//----- GET TODOS ----- //
const createGetAllTodo = () => {
  return {
    type: types.GET_ALL_TODO
  };
};

const getAllTodosSuccess = (data: Todo[]) => {
  return {
    type: types.GET_ALL_TODOS_SUCCESS,
    payload: data
  };
};

export const getAllTodos = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createGetAllTodo());
    const res = await todoAPI.getAllTodos();
    dispatch(getAllTodosSuccess(res.data));
  } catch (err) {
    dispatch(catchRequestErr(err));
  }
};

//----- COMPLETE TODO ----- //
const createCompleteTodo = () => {
  return {
    type: types.COMPLETE_TODO
  };
};

//----- ADD TODO ----- //
const createAddTodo = () => {
  return {
    type: types.ADD_TODO
  };
};
const addTodoSuccess = (data: Todo) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.ADD_TODO_SUCCESS,
    payload: data
  });
  dispatch(setSnackBar({ type: 'success', msg: `${data.content} was added` }));
};
export const addTodo = (content: Object) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createAddTodo());
    const res = await todoAPI.addTodo(content);
    dispatch(addTodoSuccess(res.data));
  } catch (err) {
    dispatch(catchRequestErr(err));
  }
};

const catchRequestErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.REQUEST_FAILURE,
    payload: err.message
  });
  setSnackBar({ type: 'error', msg: err.message });
};

export const clearTodos = () => {
  return {
    type: types.CLEAR_TODOS
  };
};
