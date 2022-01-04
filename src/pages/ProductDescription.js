import React, { Component } from 'react'
import Product from '../components/Product'
import { withRouter } from "react-router-dom";

class ProductDescription extends Component {
    render() {
        return (
            <>
                <Product />
            </>
        )
    }
}

export default ProductDescription