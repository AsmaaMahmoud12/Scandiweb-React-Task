import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Currency from './Currency'
import productCart from '../images/product-cart.png'

class CategoryList extends Component {
    render() {
        const { product } = this.props
        const { prices } = product
        const { inStock } = product
        const inCart = this.props.cartItems.map(({product}) => product.id)
        
        return(
            <>
                <div className="container">
                    <div className='grid'>
                    {inStock ? (
                        <>
                            <Link to={{pathname:`/product/${product.id}`, state:{product}}}  className='grid-link'>
                                <img src={product.gallery} alt="gallery" className="images"/>
                                {inCart.map((inCart) => inCart == product.id ? (
                                        <div className='cartLogo'>
                                            <img src={productCart} alt="" />
                                        </div>
                                    ) : null
                                )
                                }
                                <div className="grid-text">
                                    <p>{product.name}</p>
                                    <Currency key={product.id}  className='category-currency' prices={prices} />
                                </div>
                            </Link>  
                        </>
                    ) : (
                        <div className='outOfStock'>
                            <img src={product.gallery} alt="gallery" className="images"/>
                            <div className='centeredLabel'>OUT OF STOCK</div>
                                <div className="grid-text">
                                    <p>{product.name}</p>
                                </div>
                        </div>
                        
                    )}
                    </div>
                </div>
            </>
        )
                  
    }
}

export default CategoryList

