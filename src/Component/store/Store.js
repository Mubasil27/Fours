import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;


