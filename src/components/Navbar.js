import React, { Component } from 'react'
import logo from '../images/icons/logo.png'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentCurrency } from './redux/actions/currencyAction'
import { categoryList } from './redux/actions/categoryAction'
import CartOverlay from './CartOverlay';
import CategorySwitcher from './CategorySwitcher';
import CurrencySwitcher from './CurrencySwitcher';

class Navbar extends Component {
    render() {
        return (
            <>
                <div className='navbar'>
                    <div  className='navMenu'>

                        <CategorySwitcher categories={this.props.categories}
                            categoryList={this.props.categoryList}
                        />
                    </div>
                    <div className='navLogo'>
                        <Link to='/'>
                            <img src={logo} className='homeLogo' alt="logo" />
                        </Link>
                    </div>
                    <div className='navActions' >
                        <CurrencySwitcher  
                            currentCurrency={this.props.currentCurrency} 
                            currencies={this.props.currencies}
                        />
                        <CartOverlay cartItems={this.props.cartItems}/>
                    </div>
                </div>  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currencies: state.currencyReducer.currencies,
        categories: state.categoryReducer.categories,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        currentCurrency: (currency) => dispatch(currentCurrency(currency)),
        categoryList: (category) => dispatch(categoryList(category)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
