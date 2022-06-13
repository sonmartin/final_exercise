import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  getTodoSagaSuccess,
  addTodoSagaFailed,
  deleteTodoSagaSuccess,
  addTodoSagaSuccess,
  editTodoSagaSuccess,
  deleteTodoSagaFailed,
  editTodoSagaFailed,
  completeTodoSuccess,
  completeTodoFailed,
} from "../../action/actionTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../../action/actionTypes";
import {
  APIgetTodoSaga,
  APIAddTodoSaga,
  APIDeleteTodoSaga,
  APIEditTodoSaga,
  APICompleteTodoSaga,
} from "../../services/TodoServices";
import auth from "./AuthSaga";

export function* fetchTodoSaga() {
  try {
    const response = yield call(APIgetTodoSaga);

    yield put(getTodoSagaSuccess(response.data));
    toast.success("Xin Chào ");
  } catch (error) {
    yield put(getTodoSagaFailed(response.error));
    toast.error("^^ ");
  }
}
export function* AddTodoSaga(payload) {
  try {
    const response = yield call(APIAddTodoSaga, payload.payload);

    yield put(addTodoSagaSuccess(response.data));
    toast.success("Thêm Vào Thành Công ");
  } catch (error) {
    yield put(addTodoSagaFailed(response.error));
    toast.error("Thêm Vào Thất Bại ");
  }
}

export function* DeleteTodoSaga(payload) {
  try {
    const response = yield call(APIDeleteTodoSaga, payload.payload.id);
    console.log(payload)
    yield put(deleteTodoSagaSuccess(response.data));
    toast.success("Xóa Thành Công ");
  } catch (error) {
    yield put(deleteTodoSagaFailed(response.error));
    toast.error("Xóa Thất Bại ");
  }
}

export function* EditTodoSaga({ id, text }) {
  try {
    const response = yield call(APIEditTodoSaga(id, text));
    toast.success("Sửa Thành Công ");
    yield put(editTodoSagaSuccess(response.data));
  } catch (error) {
    yield put(editTodoSagaFailed(response.error));
    toast.error("Sửa Thất Bại ");
  }
}
export function* CompleteTodoSaga({ payload }) {
  try {
    const response = yield call(APICompleteTodoSaga(payload));
    toast.success("OK!!");
    yield put(completeTodoSuccess(response.data));
  } catch (error) {
    yield put(completeTodoFailed(response.error));
    toast.error("KHÔNG ỔN RỒI ĐẠI ZƯƠNG ƠI");
  }
}

export function* get() {
  yield takeLatest(types.GET_TODO, fetchTodoSaga);
}

export function* Delete() {
  yield takeLatest(types.DELETE_TODO, DeleteTodoSaga);
}

export function* Add() {
  yield takeLatest(types.ADD_TODO, AddTodoSaga);
}

export function* Edit() {
  yield takeLatest(types.EDIT_TODO, EditTodoSaga);
}

export function* Complete() {
  yield takeLatest(types.COMPLETE_TODO, CompleteTodoSaga);
}
export function* start() {
  yield all([
    call(get),
    call(Delete),
    call(Add),
    call(Edit),
    call(Complete),
    call(auth),
  ]);
}
