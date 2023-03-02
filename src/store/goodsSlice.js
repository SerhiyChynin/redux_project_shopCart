
import { createSlice } from '@reduxjs/toolkit';
import goodsArr from '../goods.json';

export const goodsSlice = createSlice({
    name: goodsArr,
    initialState: {
        goods: goodsArr
    },
    reducers: {

    },
}) 

export const { } = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer;  
