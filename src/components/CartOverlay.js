import React, { Component } from 'react'
import emptyCart from '../images/icons/Empty-Cart.png'
import { Link } from 'react-router-dom';
import ProductAttribute from './ProductAttribute';
import QuantityModifier from './QuantityModifier';
import Currency from './Currency';
import TotalPrice from './TotalPrice';

class CartOverlay extends Component {
    state = {
        toggleCart: false,
    }
    triggerToggleCart = () => {
        this.setState({
            toggleCart: !this.state.toggleCart
        })
    }
    handleCart = () => {
        this.setState({
            toggleCart:false
        })
    }
    render() {
        return (
            <>
                <button className='cartOverlay' onClick={this.triggerToggleCart}>
                           
                    {this.props.cartItems.length > 0 ? (
                        <>
                            <img className='cart' src={emptyCart} alt="cart" />
                            <span className="cartCount">{this.props.cartItems.length}</span>
                        </>
                    ) : (
                        <>
                            <img className='cart' src={emptyCart} alt="cart" />
                        </>
                    )
                    }
                </button>
                {
                this.state.toggleCart && (
                    <div className="dropdown-cart">
                    {
                    this.props.cartItems.length > 0 ? (
                        <>
                        
                            <p><i>My bag</i>,{this.props.cartItems.length} {this.props.cartItems.length == 1 ? ('item') : ('items')} </p>
                            {this.props.cartItems.map(({product, quantity}) => (
                                <span className="cartItem" key={product.id}>
                                    <div className="cartRow">
                                        <div className="cartItemDetail">
                                            <span>{product.brand}</span>
                                            <span>{product.name}</span>
                                            <span>{product.price}</span>
                                        </div>
                                        <Currency className='cartOverlay-currency' prices={product.prices}/>
                                        <ProductAttribute className="cartOverlay-attributes"
                                            selectedAttributes={product.selectedAttributes} 
                                            setSelectedAttributes={null} attributes={product.attributes} />
                                    </div>
                                    <QuantityModifier className={'cartOverlay'} item={product} quantity={quantity}/>
                                    <div className="cartRow">   
                                        <img
                                            src={product.gallery[0]}
                                            className="cartItemImg"
                                            alt={product.name}
                                        />

                                    </div>

                                </span>


                            ))
                            }
                            <TotalPrice className='cartOverlay-totalPrice' cartItems={this.props.cartItems} />

                        </>
                        ) : <div className='empty-cart'>
                                <p>Cart is empty</p>
                            </div>
                            
                    }
                    <div className="cart-buttons" >
                        <Link to="/cart/">
                            <button onClick={this.handleCart} className="cart-button" >
                                view bag
                            </button>
                        </Link>
                        <Link to="/cart/">
                            <button onClick={this.handleCart} className="cart-checkout" >
                                checkout
                            </button>
                        </Link>
                    </div>
            </div>
            )
            }
            </>
        )
    }
}

export default CartOverlay