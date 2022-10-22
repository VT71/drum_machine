import { configureStore } from '@reduxjs/toolkit';
import drumReducer from '../store/slices/drumSlice';

const store = configureStore({
    reducer: { drum: drumReducer },
});

export default store;
