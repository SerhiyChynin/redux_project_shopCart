import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import Cart from "../components/Cart";
import {add, minus, delet} from '../store/cartSlice'

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
     // переиндексация массива товаров
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    function clickHandler() {
        const addGoods = () => {
            dispatch(add())
        }
        console.log(Cart)
      console.log('Hello!')
    }
    
    return (
        <div onClick={clickHandler}>
            <ul>
                {Object.keys(cart).map(item => <li key={item}>{goodsObj[item]['title']} - {cart[item]}</li>)}
            </ul>
        </div>
    )
}

export default CartList;



