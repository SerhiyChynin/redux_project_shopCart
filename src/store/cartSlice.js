
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul] ++;
        },

        add: (state, data) => {
            let articul = data.payload;
            state.value[articul]++;
            return state;
        },
        minus: (state, data) => {
            let articul = data.payload;
            state.value[articul]--;
            if (state.value[articul] === 0) state.value[articul] = state.value = {};
            return state;
        },
        delet: (state, data) => {
            state.value = {};
            return state;
        },
    }
}) 

export const {increment , add, minus, delet} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;  
