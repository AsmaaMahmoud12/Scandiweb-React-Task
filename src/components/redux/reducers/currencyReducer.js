import {   
    CURRENCY_LIST,
    CURRENT_CURRENCY
} from '../constants'

const initState = {
    currencies: [],
    currentCurrency: "USD"
}
const currencyReducer = (state = initState, action) => {
    switch (action.type) {
        case CURRENCY_LIST:
            return {
              ...state,
              currencies: [...state.currencies, action.payload]
            }
        case CURRENT_CURRENCY:
            return {
            ...state,
            currentCurrency: Object.values(action.payload)
            }
        default:
            return state
    }
}

export default currencyReducer