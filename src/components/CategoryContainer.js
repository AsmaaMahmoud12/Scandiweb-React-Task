import React, { Component } from 'react'
import {LOAD_PRODUCTS} from '../GraphQL/Queries'
import { Query } from '@apollo/client/react/components'
import CategoryList from './CategoryList'
import { connect } from 'react-redux'
import { categoryList } from './redux/actions/categoryAction'

class CategoryContainer extends Component {
    render() {
        const categories = this.props.categories
        const cartItems = this.props.cartItems
        
        return (
            <>
                <Query query={LOAD_PRODUCTS}>
                    {({error, loading, data}) => {
                        if (loading) return "Loading ...."
                        if (error) return "Error"
                        const { category} = data
                        return category.products.map( product => (
                            product.category ==  categories ? (
                                <CategoryList product={product} categories={categories} cartItems={cartItems} key={product.id}/> 
                            ) : categories == 'all' ? (
                                <CategoryList product={product} categories={categories} cartItems={cartItems} key={product.id}/> 
                            ) : null

                        ))
                    }}
                </Query>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.categories,
        cartItems: state.cartReducer.cartItems,
        currentCategory: state.cartReducer.currentCategory

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryList: (category) => dispatch(categoryList(category)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryContainer)
