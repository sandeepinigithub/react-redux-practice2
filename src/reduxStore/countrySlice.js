import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        updateByPayload: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { updateByPayload } = countrySlice.actions;
export default countrySlice.reducer;