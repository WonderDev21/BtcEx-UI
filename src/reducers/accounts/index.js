import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';
import { mapTickerArray, parseTickerPrice } from '../../common/exchangeUtils';

export function ticker(state = initialState.ticker, action) {
  switch(action.type) {
    case types.GET_EXCHANGE_RATES_REQUEST: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_EXCHANGE_RATES_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.conversionRate = action.payload.rates || null;
      if (newState.conversionRate) {
        newState.conversionRate.USDT = newState.conversionRate.USD;
      }
      return newState;
    }
    case types.GET_EXCHANGE_RATES_FAILURE: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_TICKER_REQUEST: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_TICKER_SUCCESS: {
      const newState = Object.assign({}, state);
      const baseRate = newState.conversionRate[newState.baseCurrency];
      const tickerRates = mapTickerArray(action.payload, newState.exchangePrice, baseRate);
      const baseCurrencyRate = newState.conversionRate[newState.baseCurrency];
      const currencyRates = parseTickerPrice(tickerRates, baseCurrencyRate);
      if (tickerRates) {
        newState.currencyRates = currencyRates;
        newState.rates = tickerRates;
      }
      return newState;
    }
    case types.GET_TICKER_FAILURE: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_PRICE_REQUEST: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_PRICE_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.exchangePrice = action.payload;
      return newState;
    }
    case types.GET_PRICE_FAILURE: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
}

export function walletAddress(state = initialState.walletAddress, action) {
  switch (action.type) {
    case types.GET_WALLET_ADDRESS_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isLoading = true;
      newState.errorMsg = null;
      return newState;
    }
    case types.GET_WALLET_ADDRESS_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isLoading = false;
      newState[action.payload.currency] = action.payload;
      newState.errorMsg = null;
      return newState;
    }
    case types.GET_WALLET_ADDRESS_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isLoading = false;
      newState.errorMsg = action.message;
      return newState;
    }
    default:
      return state;
  }
}

export function depositRequest(state = initialState.depositRequest, action) {
  switch (action.type) {
    case types.POST_DEPOSIT_REQUEST_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = true;
      newState.isSuccess = false;
      newState.isError = false;
      newState.errorMsg = null;
      return newState;
    }
    case types.POST_DEPOSIT_REQUEST_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.isSuccess = true;
      newState.requests = action.payload;
      newState.isError = false;
      newState.errorMsg = null;
      return newState;
    }
    case types.POST_DEPOSIT_REQUEST_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.isSuccess = false;
      newState.isError = true;
      newState.errorMsg = action.message;
      return newState;
    }
    case "CLEAR_DEPOSIT_REQUEST": {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.isSuccess = false;
      newState.isError = false;
      newState.errorMsg = null;
      return newState;
    }
    default:
      return state;
  }
}

export function withdraw(state = initialState.withdraw, action) {
  switch(action.type) {
    case types.POST_WITHDRAW_OTP_REQUEST:
    case types.POST_WITHDRAW_AMOUNT_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = true;
      newState.apiErrorMsg = null;
      return newState;
    }
    case types.POST_WITHDRAW_OTP_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      newState.isSubmitting = false;
      newState.isSuccess = true;
      newState.apiErrorMsg = null;
      return newState;
    }
    case types.POST_WITHDRAW_AMOUNT_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      newState.isSubmitting = false;
      newState.isSuccess = true;
      newState.apiErrorMsg = null;
      return newState;
    }
    case types.POST_WITHDRAW_OTP_FAILURE:
    case types.POST_WITHDRAW_AMOUNT_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.apiErrorMsg = action.message;
      return newState;
    }
    case "CLEAR_WITHDRAW_STATE": {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.apiErrorMsg = null;
      newState.isSuccess = false;
      return newState;
    }
    default :
      return state;
  }
}
