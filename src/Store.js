import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const loggerMiddleware = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

export const Store = configureStore({
    reducer:CounterSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});
