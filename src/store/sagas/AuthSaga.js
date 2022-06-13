import {
  loginActionSaga,
  logoutActionSaga,
  registerActionSaga,
} from "../../services/AuthServices";
import { takeLatest, put, call, delay, take } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../../action/actionTypes";

export function* loginSaga({ payload }) {
  try {
    const response = yield call(loginActionSaga(payload));
    window.location.replace("/todo");

    yield put({ type: types.LOGIN_USER_SUCCESS, response });

    toast.success("Đăng Nhập Thành Công  ^-^");
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
    toast.error("Đăng Nhập Thất Bại  :((");
  }
}

export function* registerSaga({ payload }) {
  try {
    const response = yield call(registerActionSaga(payload));
    window.location.replace("/login");
    yield put({ type: types.REGISTER_USER_SUCCESS, response });

    toast.success("Đăng Kí Thành Công ^-^");
  } catch (errors) {
    yield put({ type: types.REGISTER_USER_ERROR, errors });
    toast.error("Đăng Kí Thất Bại ^-^");
  }
}

function* logoutSaga() {
  yield call(logoutActionSaga);

  window.location.replace("/");

  toast.success("Đăng Xuất Thành Công Nha ^-^");
}
export default function* auth() {
  yield takeLatest("LOGIN_USER", loginSaga);
  yield takeLatest("REGISTER_USER", registerSaga);
  yield takeLatest("LOGOUT", logoutSaga);
}
