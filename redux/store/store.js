// store.js
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../reducer/reducers';

// Create store
const store = configureStore({
    reducer: {
        todoReducer,
    }
});

export default store;
