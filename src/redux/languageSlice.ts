import {createSlice} from "@reduxjs/toolkit";

interface initialStateInterface {
    data: string
}

const initialState: initialStateInterface = {
    data: ''
}

const languageSlice = createSlice({
    initialState: initialState,
    name: 'language',
    reducers: {
        setLanguage(state, action) {
            state.data = action.payload
        }
    }
})

export default languageSlice.reducer;
export const {setLanguage} = languageSlice.actions;
