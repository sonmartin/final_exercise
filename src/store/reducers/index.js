import { combineReducers } from "redux";


import todoReducer from "./glabalReducer/todoReducer";

import authReducer from "./glabalReducer/authReducer";


const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
 
  


});

export default rootReducer;
