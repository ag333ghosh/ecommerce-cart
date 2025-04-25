import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(sessionStorage.getItem("currentUser"));

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: storedUser || null,
        message: "",
    },

    reducers: {
        login(state, action) {
            const allUsers = JSON.parse(localStorage.getItem("users")) || [];
            const foundUser = allUsers.find(
                (user) => user.email === action.payload.email && user.password === action.payload.password
            );
            if (foundUser) {
                state.user = foundUser;
                sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
            } else {
                state.message = "User not found, login failed.";   
            }
        },
        signup(state, action) {
            const allUsers = JSON.parse(localStorage.getItem("users")) || [];
            const foundUser = allUsers.find((user) => user.email === action.payload.email);
            if (foundUser) {
                state.message = "User already exists, please login...";
            } else {
                allUsers.push(action.payload);
                localStorage.setItem("users", JSON.stringify(allUsers));
                state.message = "Signup successful, please login...";
            }
        },
        logout(state) {
            state.user = null;
            state.message = "";
            sessionStorage.removeItem("currentUser");
        },
        clearMessage(state) {
            state.message = "";
        },
    },
});

export const { login, logout, signup, clearMessage } = AuthSlice.actions;

export default AuthSlice.reducer;