import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currencyList } from './redux/actions/currencyAction'
import getSymbolFromCurrency from 'currency-symbol-map'

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: this.props.prices.map(item => item.currency),
            price: this.props.prices.map(price => price),
        };
        this.props.currencyList(this.state.currencies)  
    }
    render() {
        const currency = this.state.price.filter((currency) => this.props.currentCurrency == currency.currency)
        return (
            <div className={this.props.className}>
            {
                this.props.currentCurrency ? (
                    currency.map(({amount,currency}) => ( 
                        <b>{getSymbolFromCurrency(currency) + ' ' + amount }</b>
                    ))
                ): null
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencyReducer.currencies,
        currentCurrency: state.currencyReducer.currentCurrency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currencyList: (currency) => dispatch(currencyList(currency)),
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Currency)
