import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import Goods from "../components/Goods";

/**
 * get data from store
 * list store
*/

function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image}
                articul={item.articul} key={item.articul} />)}
            </div>
        </div>
    )
}


export default GoodsList;