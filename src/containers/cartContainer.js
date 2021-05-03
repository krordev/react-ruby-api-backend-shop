import React, { Component } from 'react';
import CartList from '../components/cart/CartList'
import { connect } from 'react-redux'
import CartTotal from '../components/cart/CartTotal'
import CheckoutButton from '../components/cart/CheckoutButton'
import { Container } from 'react-bootstrap'

class CartContainer extends Component {

    render() {
        return (
            <Container> 
                <div>
                    <CartList items={this.props.items} />
                    <CheckoutButton items={this.props.items} totalPrice={this.props.totalPrice} />
                    <CartTotal totalPrice={this.props.totalPrice} />
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems,
    ingredientIds: state.cartReducer.ingredientIds,
    totalPrice: state.smoothieReducer.smoothiePrice
})

export default connect(mapStateToProps)(CartContainer);
