import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'jon doe',
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
        }
}
});

export const { login,logout } = userSlice.actions;

export default userSlice.reducer;