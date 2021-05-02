import React, { Component } from 'react';
import CartItem from './CartItem'

class CartList extends Component {

    renderItems = () => {
        return this.props.items.map((item) => (
            <li><CartItem item={item} key={item.id} /></li>
        ))
    }

    render() {
        return (
            <div>
                <h5>Order:</h5>
                {this.renderItems()}
            </div>
        );
    }
}

export default CartList;
