import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import rootReducer from "../store/reducers/index";

import sagaMiddleware from "../store/middlewares/saga/index";
import { start } from "./sagas/todoSaga";

const middleware = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(start);

export default store;
