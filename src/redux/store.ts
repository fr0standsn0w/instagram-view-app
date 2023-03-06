import {combineReducers, configureStore} from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";

const rootReducer = combineReducers({
    language: languageSlice
})

export type IRootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})
