import React, { Component } from 'react'

class AddToCart extends Component {
    state = {
        currentAttributes: {}
    };
    addToCart = (e) => {
        e.preventDefault();
        if(Object.keys(this.props.attributes).length == this.props.product.attributes.length){
            const product = {
                ...this.props.product,
                selectedAttributes: this.props.attributes,
            }
            this.props.addToCart(product)
        }
        else{
            alert('PLEASE CHOOSE ALL ATTRIBUTES')
        }
    }

    render() {
        return (
            <>
            {
                this.props.inCart?(
                    <span className="added-cart">Added to cart</span>
                ) : (
                    <button className='cart' onClick={this.addToCart} >Add to cart</button>
                )

            }
            </>
        )
    }
}

export default AddToCart