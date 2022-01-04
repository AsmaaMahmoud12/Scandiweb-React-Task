import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from './redux/actions/cartAction'
import TotalPrice from './TotalPrice';

class CartContainer extends Component {
    handleClear = () => {
        this.props.clearCart()
    }
    handleCheckout = () => {
        alert("Checkout Completed ")
    }
    componentDidMount(){
        window.scrollTo({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
    }
    render() {
        const cart  = this.props.cartItems.length > 0? (
            <>
                {
                    this.props.cartItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <CartItem item={item}/>
                            </div>
                        )
                    })
                }
                <TotalPrice className="cart-totalPrice" cartItems={this.props.cartItems}/>
            </>
        ) : (
            <div className='empty-cart'>
                <p>Cart is empty</p>
            </div>
        )
        return (
            <>
                <div className="cart-row">
                    <h3 className="cart-header">Cart</h3>
                    <div  className='clear-cart'>
                        <button onClick={this.handleClear}>Clear Cart</button>
                    </div>
                    { cart }
                    <button className="cart-checkout"  onClick={this.handleCheckout}>
                        Checkout
                    </button>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)