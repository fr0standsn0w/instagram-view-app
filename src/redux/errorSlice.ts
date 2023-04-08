import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
    initialState: {
        data: {}
    },
    name: 'error',
    reducers: {
        setError(state, action){
            state.data = action.payload
        }
    }
})

export default errorSlice.reducer;
export const {setError} = errorSlice.actions;
