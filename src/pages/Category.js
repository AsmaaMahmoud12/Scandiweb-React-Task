import React, { Component } from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Title from '../components/Title'
import { connect } from 'react-redux'

class Category extends Component {
    render() {
        return (
            <>
                <Title title={this.props.categories} />
                <CategoryContainer />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.cartReducer.categories,
    }
};
export default  connect(mapStateToProps)(Category)