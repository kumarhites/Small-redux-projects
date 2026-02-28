import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./state/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});