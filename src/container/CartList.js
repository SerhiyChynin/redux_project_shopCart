import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function CartList() {
     const goods = useSelector(selectGoods);
     const cart = useSelector(selectCart);
     // переиндексация массива товаров
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    return (
        <div>
            <ul>
                {Object.keys(cart).map(item => <li key={item}>{goodsObj[item]['title']} - {cart[item]}</li>)}
            </ul>
        </div>
    )
}

export default CartList;