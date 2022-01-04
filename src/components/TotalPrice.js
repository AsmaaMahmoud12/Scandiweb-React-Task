import React, { Component } from 'react'
import { connect } from 'react-redux'
import getSymbolFromCurrency from 'currency-symbol-map'

class TotalPrice extends Component {
    render() {
        let total = 0;
        let currentCurrency = this.props.currentCurrency
        this.props.cartItems.map(item =>  
            item.product.prices.map(({amount,currency}) => (
                currency == currentCurrency ? (
                    total += amount * item.quantity
            ) : null
            ))
        )
        const currentSymbol = currentCurrency[0] ? (
            getSymbolFromCurrency(currentCurrency)
        ) : getSymbolFromCurrency(currentCurrency[0])
        return (
            <div className={this.props.className}>
                <h4 className="text-right">Total <strong>{currentSymbol + " " +total}</strong></h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCurrency: state.currencyReducer.currentCurrency,
    }
}
export default  connect(mapStateToProps)(TotalPrice)