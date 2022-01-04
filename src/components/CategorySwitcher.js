import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { LOAD_CATEGORIES } from '../GraphQL/Queries';

class CategorySwitcher extends Component {
    state = {
        categories: this.props.categories
    }
    handleCategory = (e) => {
        console.log(e.target.value)
        this.props.categoryList(e.target.value)
        this.setState({
            categories: e.target.value
        })
    }
    render() {
        return (
            <Query query={LOAD_CATEGORIES}>
                {({error, loading, data}) => {
                    if (loading) return "Loading ...."
                    if (error) return "Error"
                    const { category } = data
                    const categories = [...new Set(category.products.map(({category}) => category))]
                    return (
                        <>
                            <Link to='/'>
                                <button  value='all' onClick={this.handleCategory} className={this.state.categories == "all" ? "activeCategory" : null}>
                                    all
                                </button>
                            </Link>
                            {
                                categories.map((category) => (
                                <Link  to='/'>
                                    <button value={category} className={this.state.categories == category ? "activeCategory" : null}
                                    onClick={this.handleCategory}>{category}</button>
                                </Link>
                                ))
                            }
                        </>
                    
                       
                        )
                }}
            </Query>
        )
    }
}

export default CategorySwitcher
