import * as types from "./actionTypes";
export const getTodoAction = () => {
  return {
    type: types.GET_TODO,
  };
};
export const getTodoSagaSuccess = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};

export const getTodoSagaFailed = () => {
  return {
    type: types.GET_TODO_FAILED,
  };
};

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
export const completeTodoSuccess = (todo) => ({
  type: types.COMPLETE_TODO_SUCCESS,
  payload: todo,
});
export const completeTodoFailed = () => ({
  type: types.COMPLETE_TODO_FAILED,
});

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const addTodoSagaSuccess = (payload) => ({
  type: types.ADD_TODO_SUCCESS,
  payload,
});

export const addTodoSagaFailed = () => ({
  type: types.ADD_TODO_FAILED,
});

export const deleteTodo = (todo) => ({
  type: types.DELETE_TODO,
  payload: todo,
});

export const deleteTodoSagaSuccess = (todo) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: todo,
});

export const deleteTodoSagaFailed = () => ({
  type: types.DELETE_TODO_FAILED,
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

export const editTodoSagaSuccess = (payload) => ({
  type: types.EDIT_TODO_SUCCESS,
  payload,
});

export const editTodoSagaFailed = () => ({
  type: types.EDIT_TODO_FAILED,
});
