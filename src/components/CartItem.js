import React, { Component } from 'react'
import Currency from './Currency';
import ProductAttribute from './ProductAttribute';
import QuantityModifier from './QuantityModifier';

class CartItem extends Component {
    state = {
        productAttribute: this.props.item.product.selectedAttributes,
        index: 0
    }
    slideRight = (imageLength) => {
        this.setState({
            index: (this.state.index + 1) % imageLength
        })
      };
    
    slideLeft = (imageLength) => {
        const nextIndex = this.state.index -1;
        if (nextIndex < 0) {
            this.setState({
                index: imageLength - 1
            })
        } 
        else if(this.state.index > 0){
            this.setState({
                index: nextIndex
            })
        }
    };

    render() {
        const { item } = this.props;
        return (
          <div className="cart-container">
            <div className="cart-items">
                <div className="cart-product-name">
                    <h4 className="product-name"><strong>{item.product.brand}</strong></h4>
                    <h4 className="product-name">{item.product.name}</h4>
                    <div className="product-price">
                        <Currency key={item.product.id} className='cart-currency' prices={item.product.prices}/>
                    </div>
                    <ProductAttribute className="cart-attributes" 
                    id={item.product.id} selectedAttributes={this.state.productAttribute} 
                    setSelectedAttributes={null} attributes={item.product.attributes} />
                </div>
                <QuantityModifier className='cart' item={item.product} 
                    quantity={item.quantity}/>
                <div className="cart-image">
                    <button onClick={() => this.slideRight(item.product.gallery.length)}>{"<"}</button>
                        <img src={item.product.gallery[this.state.index]} alt={item.product.name} />
                    <button  onClick={() => this.slideLeft(item.product.gallery.length)} >{">"}</button>
                </div>
            </div>

        </div>
    )
  }
}


export default CartItem;
