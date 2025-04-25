import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "../Slices/CartSlice"
import AuthSlice from "../Slices/AuthSlice"

const store = configureStore({
    reducer: {
        cart: CartSlice,
        auth: AuthSlice
       
    }
});

export default store;