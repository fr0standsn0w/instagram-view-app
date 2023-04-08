import {combineReducers, configureStore} from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import profileSlice from "./profileSlice";
import errorSlice from "./errorSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    profile: profileSlice,
    error: errorSlice
})

export type IRootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})
