import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const STORE = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (args: any) => args
  )
);

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;