import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import { add, minus, delet } from '../store/cartSlice'
import Cart from "../components/Cart";

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
     // переиндексация массива товаров
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    console.log(goodsObj);

    function clickHandler(event) {
      if (event.target.classList.contains('plus')) {
        console.log('+');
        const articul = event.target.getAttribute('data-articul');
        dispatch(add(articul));
        }
        if (event.target.classList.contains('minus')) {
            console.log('-');
            const articul = event.target.getAttribute('data-articul');
            dispatch(minus(articul));
            console.log(cart);
        }
        if (event.target.classList.contains('delet')) {
            console.log('delete');
            const articul = event.target.getAttribute('data-articul');
            dispatch(delet(articul))
        }
    }
    
    return (
        <div onClick={clickHandler}>
                {<Cart  cart={cart}  goods={goods} />}
            <ul>
                {Object.keys(cart).map(item => <li key={item}> <img src={goodsObj[item]['image']}
                    width="32px" height="32px" /> - {goodsObj[item]['title']} - {cart[item]} - 
                    <button className="plus" data-articul={item}>+</button> 
                    <button className="minus" data-articul={item}>-</button>
                    <button className="delet" data-articul={item}>Delete</button> </li>)}
            </ul>
        </div>
    )
}

export default CartList;



