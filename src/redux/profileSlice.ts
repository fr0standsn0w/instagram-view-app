import {createSlice} from "@reduxjs/toolkit";
import {ProfileI} from "../interfaces/profileInterface";

interface initialStateInterface {
    data: ProfileI
}
const initialState: initialStateInterface = {
    data: {}
}
const profileSlice = createSlice({
    initialState: initialState,
    name: 'profile',
    reducers: {
        setProfile(state, action) {
            state.data = action.payload
        },
        reset: () => initialState
    }
})
export default profileSlice.reducer;
export const {setProfile} = profileSlice.actions
export const {reset} = profileSlice.actions
