import types from '../../constants/ActionTypes';

export const exchangeRateRequest = (reqObj) => ({ type: types.GET_EXCHANGE_RATES_REQUEST, data: reqObj });
export const exchangeRateSuccess = (data) => ({ type: types.GET_EXCHANGE_RATES_SUCCESS, payload: data });
export const exchangeRateFailure = (message) => ({ type: types.GET_EXCHANGE_RATES_FAILURE, message });

export const tickerRequest = (reqObj) => ({ type: types.GET_TICKER_REQUEST, data: reqObj });
export const tickerSuccess = (data) => ({ type: types.GET_TICKER_SUCCESS, payload: data });
export const tickerFailure = (message) => ({ type: types.GET_TICKER_FAILURE, message });

export const priceRequest = (reqObj) => ({ type: types.GET_PRICE_REQUEST, data: reqObj });
export const priceSuccess = (data) => ({ type: types.GET_PRICE_SUCCESS, payload: data });
export const priceFailure = (message) => ({ type: types.GET_PRICE_FAILURE, message });

export const cryptoSummaryRequest = (reqObj) => ({ type: types.GET_PRICE_REQUEST, data: reqObj });
export const cryptoSummarySuccess = (data) => ({ type: types.GET_PRICE_SUCCESS, payload: data });
export const cryptoSummaryFailure = (message) => ({ type: types.GET_PRICE_FAILURE, message });

export const walletAddressRequest = (reqObj) => ({ type: types.GET_WALLET_ADDRESS_REQUEST, data: reqObj });
export const walletAddressSuccess = (data) => ({ type: types.GET_WALLET_ADDRESS_SUCCESS, payload: data });
export const walletAddressFailure = (message) => ({ type: types.GET_WALLET_ADDRESS_FAILURE, message });

export const makeDepositRequest = (reqObj) => ({ type: types.POST_DEPOSIT_REQUEST_REQUEST, data: reqObj });
export const depositRequestSuccess = (data) => ({ type: types.POST_DEPOSIT_REQUEST_SUCCESS, payload: data });
export const depositRequestFailure = (message) => ({ type: types.POST_DEPOSIT_REQUEST_FAILURE, message });
export const clearDepositRequest = () => ({ type: "CLEAR_DEPOSIT_REQUEST" });

export const withdrawOTPRequest = (reqObj) => ({ type: types.POST_WITHDRAW_OTP_REQUEST, data: reqObj });
export const withdrawOTPSuccess = (data) => ({ type: types.POST_WITHDRAW_OTP_SUCCESS, payload: data });
export const withdrawOTPFailure = message => ({ type: types.POST_WITHDRAW_OTP_FAILURE, message });

export const withdrawAmountRequest = (reqObj) => ({ type: types.POST_WITHDRAW_AMOUNT_REQUEST, data: reqObj });
export const withdrawAmountSuccess = (data) => ({ type: types.POST_WITHDRAW_AMOUNT_SUCCESS, payload: data });
export const withdrawAmountFailure = message => ({ type: types.POST_WITHDRAW_AMOUNT_FAILURE, message });
export const clearWithdrawState = () => ({ type: "CLEAR_WITHDRAW_STATE" });
