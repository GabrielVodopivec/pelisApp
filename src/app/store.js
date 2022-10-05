import { configureStore } from "@reduxjs/toolkit";
import { initialState, rootReducer } from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})