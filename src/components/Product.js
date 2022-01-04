import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';
import { addToCart } from './redux/actions/cartAction';
import { compose } from 'redux';
import Currency from './Currency';
import ProductAttribute from './ProductAttribute';
import { productAttributes } from './redux/actions/cartAction'

class Product extends Component {
    state = {
        index: 0,
        isClicked:false,
        selectedAttributes: {}
    }
    
    tabRefrence = React.createRef()

    addToCart = (product) => {
        this.props.addToCart(product);
    }

    setSelectedAttributes = (selectedAttributes) => {
        this.setState({
            selectedAttributes
        })
    }

    handleTab = index =>  {
        this.setState({index})
        const images = this.tabRefrence.current.children
        for(let i = 0; i < images.length; i++){
            images[i].className = images[i].className.replace("active" , "")
        }
        images[index].className = "active"
    }
    componentDidMount(){
        window.scrollTo({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
    }
    
    render() {
        const { product } = this.props.location.state
        const { attributes } = product
        return (
            <div className="product">
                <div className="product-container">
                    <div className="thumb" ref={this.tabRefrence}>
                        {
                            product.gallery.map( (image, index) => 
                                <img src={image} key={index}
                                alt="gallery" 
                                onClick={() => this.handleTab(index)}
                                />
                            )
                        }
                    </div>
                    <div className="product-images" >
                        <img src={product.gallery[this.state.index]} alt="" />
                    </div>
                    <div className="product-info">
                        <div className='row' >
                            <h2>{product.brand}</h2>
                            <p>{product.name}</p>
                        </div>
                        <div className="info" >
                            <ProductAttribute className="product-attributes" 
                                key={product.id} selectedAttributes={null} 
                                setSelectedAttributes={this.setSelectedAttributes} 
                                attributes={attributes}/>
                            <label>Price</label>
                            <Currency key={product.id} className='product-currency' prices={product.prices}/>
                        </div>
                        {ReactHtmlParser(product.description)}
                        <AddToCart product={product} addToCart={this.addToCart} 
                            inCart={this.props.cartItems.length > 0 
                            && this.props.cartItems.filter(e => e.product.id === product.id && JSON.stringify(e.product.selectedAttributes) == JSON.stringify(this.state.selectedAttributes)).length > 0 } 
                            key={product.id} attributes={this.state.selectedAttributes} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currentCurrency: state.currencyReducer.currentCurrency,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),        
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Product);
