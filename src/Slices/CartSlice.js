import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
                existingProduct.price += action.payload.price;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        increment(state, action) {
            const product = state.cartItems.find((item) => item.id === action.payload.id);
            if (product) {
                const pricePerUnit = product.price / product.quantity;
                product.quantity += 1;
                product.price = pricePerUnit * product.quantity;
            }
        },
        decrement(state, action) {
            const product = state.cartItems.find((item) => item.id === action.payload.id);
            if (product && product.quantity > 1) {
                const pricePerUnit = product.price / product.quantity;
                product.quantity -= 1;
                product.price = pricePerUnit * product.quantity;
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
    }
});

// Action creators
export const { addToCart, increment, decrement, removeFromCart } = CartSlice.actions;

// reducer export
export default CartSlice.reducer;
