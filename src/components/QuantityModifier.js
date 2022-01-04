import React, { Component } from 'react'
import { connect }from 'react-redux'
import { increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
} from './redux/actions/cartAction';

class QuantityModifier extends Component {
    state = {
        quantity: this.props.quantity,
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleRemove = () => {
        this.props.removeFromCart(this.props.item.id);
    }
    handleSubtraction = () => {
        this.props.decreaseQuantity(this.state.quantity,this.props.item.id,)
    }
    handleAddition = () => {
        this.props.increaseQuantity(this.state.quantity,this.props.item.id,)
    }
    render() {
        const className = this.props.className
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div  className={'quantity-modifier' + '-' + `${className}`}>
                        <button className={'cart-quantity' + '-' + `${className}`} onClick={this.handleSubtraction} value={this.state.quantity}>-</button>
                        <span className='quantity-text'>{this.props.quantity}</span>
                        <button className={'cart-quantity' + '-' + `${className}`} onClick={this.handleAddition} value={this.state.quantity}>+</button>
                    </div>            
                    <div>
                        <button type="button" onClick={this.handleRemove} className='trash'>
                            <span >Remove</span>
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (productId) => dispatch(removeFromCart(productId)),
        decreaseQuantity: (quantity,productId) => dispatch(decreaseQuantity(quantity,productId)),
        increaseQuantity: (quantity,productId) => dispatch(increaseQuantity(quantity,productId)),

    }
}

export default connect(null, mapDispatchToProps)(QuantityModifier);
