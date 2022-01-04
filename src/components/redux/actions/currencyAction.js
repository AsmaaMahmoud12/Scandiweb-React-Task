import { CURRENT_CURRENCY,CURRENCY_LIST } from "../constants";

export const currencyList = (currency) => {
  return {
    type: CURRENCY_LIST,
    payload: {
      currency,
    }
  };
}

export const currentCurrency = (currency) => {
    return {
      type: CURRENT_CURRENCY,
      payload: {
        currency,
      }
    };
  }