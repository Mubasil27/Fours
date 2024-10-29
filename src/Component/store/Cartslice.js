import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart from localStorage or initialize as an empty array if not present
let initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart
    add: (state, action) => {
      console.log("Add action payload:", action.payload); // Logging action payload for debugging
      if (action.payload) {
        const existingItem = state.find((item) => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    
    // Remove item from the cart
    remove: (state, action) => {
      console.log("Remove action payload:", action.payload); // Logging action payload for debugging
      let rmv = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(rmv)); // Update localStorage with the filtered cart
      return rmv;
    },
    
    // Increment quantity of an item in the cart
    increment: (state, action) => {
      console.log("Increment action payload:", action.payload); // Logging action payload for debugging
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity < 3) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    // Decrement quantity of an item in the cart
    decrement: (state, action) => {
      console.log("Decrement action payload:", action.payload); // Logging action payload for debugging
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    // Clear the entire cart
    clearCart: (state) => {
      console.log("Clearing cart"); // Logging cart clear action
      localStorage.removeItem("cart"); // Remove cart from localStorage
      return [];
    },
  },
});

// Export actions for dispatching
export const { add, remove, increment, decrement, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
