
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            console.log(data);
            let articul = data.payload;
        },
    }
}) 

export const {increment } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;  
