
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
            if (state.value[articul] === 0) delete (state.value[articul]);
            return state;
        },
        delet: (state, data) => {
            let articul = data.payload;
            delete (state.value[articul]);
            return state;
        },
        total: (state, data) => {
            let articul = data.payload;
            
        },
     
    }
}) 

export const {increment , add, minus, delet, total} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;  
