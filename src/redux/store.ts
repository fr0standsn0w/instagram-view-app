import {combineReducers, configureStore} from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import profileSlice from "./profileSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    profile: profileSlice
})

export type IRootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})
