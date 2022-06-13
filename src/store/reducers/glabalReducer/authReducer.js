import * as types from "../../../action/actionTypes";
const initialState = [];
const authReducer = (state = initialState, action) => {
  let response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem("user", JSON.stringify(response.data));
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };

    default:
      return state;
  }
};

export default authReducer;
