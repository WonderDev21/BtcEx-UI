import types from '../../constants/ActionTypes';

export const getCryptoSummaryRequest = () => ({ type: types.GET_CRYPTO_SUMMARY_REQUEST });
export const getCryptoSummarySuccess = (data) => ({ type: types.GET_CRYPTO_SUMMARY_SUCCESS, payload: data });
export const getCryptoSummaryFailure = (message) => ({ type: types.GET_CRYPTO_SUMMARY_FAILURE, message });
