import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import movies from "./slices/movies";
import configs from "./slices/configs";
import rootSaga from "./sagas";

const sageMiddleware = createSagaMiddleware();

const reducer = combineReducers({ movies, configs });

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sageMiddleware,
  ],
});

sageMiddleware.run(rootSaga);

export default store;
