import React, { Component } from 'react'
import dollarSign from '../images/icons/Dollar-Sign.png'
import arrowUp from '../images/icons/arrowUp.png'
import arrowDown from '../images/icons/arrowDown.png'
import getSymbolFromCurrency from 'currency-symbol-map'

class CurrencySwitcher extends Component {
    state = {
        togglePrice:false
    }

    triggerTogglePrice = () => {
        this.setState({
            togglePrice: !this.state.togglePrice
        })
    }
    
    handleCurrency = (e) => {
        this.props.currentCurrency(e.target.value)
        this.setState({
            togglePrice: !this.state.togglePrice
        })
    }
    
    render() {
        const currency = this.props.currencies.map(({currency}) => (currency))[0]
        return (
            <>
                <button className='btn' onClick={this.triggerTogglePrice}>
                    <img src={dollarSign} className='dollarSign' alt="" />
                    {
                        this.state.togglePrice ? (
                            <img className='arrow' src={arrowUp} />
                        ): <img className='arrow' src={arrowDown} />
                    }
                </button>
                    {
                        this.state.togglePrice && (
                            <div className="dropdown-currency">
                                {
                                    this.props.currencies.length > 0 ? (
                                        currency.map((currency) => 
                                        <button className='currency-btns'>
                                            <option onClick={this.handleCurrency} value={currency}>{getSymbolFromCurrency(currency) + ' ' + currency}</option>
                                        </button>
                                        )
                                    ):null
                                }
                            </div>
                        ) 
                    }
            </>
        )
    }
}

export default CurrencySwitcher