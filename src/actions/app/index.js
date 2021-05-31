import types from '../../constants/ActionTypes';

export const fetchTradeFees = () => ({ type: types.TRADE_FEE_REQUEST });
export const tradeFeeSuccess = (data) => ({ type: types.TRADE_FEE_SUCCESS, payload: data });
export const tradeFeeFailure = (message) => ({ type: types.TRADE_FEE_FAILURE, message });
