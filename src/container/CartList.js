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

    function clickHandler(event) {
      if (event.target.classList.contains('plus')) {
        console.log('+');
        const articul = event.target.getAttribute('data-articul');
        dispatch(add(articul));
        }
        if (event.target.classList.contains('minus')) {
            console.log('-');
            const articulMin = event.target.getAttribute('data-articul');
            articulMin = event.target.getAttribute('data-articul');
            dispatch(minus(articulMin))
        }
        if (event.target.classList.contains('delet')) {
            console.log('delete');
            const articulDel = event.target.getAttribute('data-articul');
            articulDel = event.target.getAttribute('data-articul');
            dispatch(delet(articulDel))
        }
    }
    
    return (
        <div onClick={clickHandler}>
            <ul>
                {<Cart cart={cart}  goods={goods} />}
                {/* {Object.keys(cart).map(item => <li key={item}>{goodsObj[item]['title'] }  - {cart[item]}  <button className="plus" data-articul={item}>+</button> <button className="minus" data-articul={item}>-</button> <button className="delet" data-articul={item}>Delete</button></li>)} */}
            </ul>
        </div>
    )
}

export default CartList;



