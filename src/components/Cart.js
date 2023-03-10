import React from 'react';


class Cart extends React.Component {

    renderObj = () => {
        let out = [];
        // console.log(this.props.goods)
        for (let key in this.props.cart) {
            let goods = this.getGoodsFromArr(key);
            out.push(
            <tr key={key}>
                <td>{goods['title']} - </td>
                <td> {this.props.cart[key]}</td>
                <td> {this.props.cart[key] * goods['cost']}</td> 
                    <td> <img src={goods['image']}
                        width="32px" height="32px" /></td> 
                    <td> 
                    <button className="plus" data-articul={key}>+</button> 
                    <button className="minus" data-articul={key}>-</button>
                    <button className="delet" data-articul={key}>Delete</button>
                    </td> 
                    <td>{this.props.total}</td>
                </tr>);
            <tr key={key}>
            </tr>
            }
            return out;
    }
    
    
    getGoodsFromArr = (art) => {
        for (let i = 0; i < this.props.goods.length; i++) {
            if (art === this.props.goods[i]['articul']){
                return this.props.goods[i];
            }
        }
    }
    
    
    render() {
        return (
            <div className="cart-field">
                <h1>Корзина</h1>
                <table>
                    <tbody>
                        <tr><th>Art</th><th>Count</th><th>Cost</th><th></th><th></th><th>Total</th></tr>
                        {this.renderObj()} 

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;

