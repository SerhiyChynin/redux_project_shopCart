import React from 'react';


class Cart extends React.Component {

    renderObj = () => {
        let out = [];
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
                </tr>);
            
            }
            return out;
    }
    renderTotal() {
        let thanks = 'Tank You!'
        let total = [];
        for (let key in this.props.cart) {

          
            total.push(
                <tr key={key}>
                    <th>{this.props.total}</th>
                </tr>);
            if (this.props.total === this.props.total)
                return <tr><th>{this.props.total} - </th>
                    <th><button onClick={() => { alert('Thank You!')}}>Pay</button></th></tr>;
        };
        return total
    };
            
    
    
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
                        <tr><th>Art</th><th>Count</th><th>Cost</th><th></th><th></th></tr>
                        {this.renderObj()} 
                        <tr><th>Total</th><th></th><th></th><th></th></tr>
                        {this.renderTotal()}
                   

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;

