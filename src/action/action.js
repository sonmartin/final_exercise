import * as types from "./actionTypes";
export const loginAction = (payload) => {
  return {
    type: types.LOGIN_USER,
    payload,
  };
};
export const registerAction = (payload) => {
  return {
    type: types.REGISTER_USER,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT,
  };
};
