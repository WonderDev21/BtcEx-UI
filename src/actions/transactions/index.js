import types from '../../constants/ActionTypes';

export const getTransactionDepositRequests = (userId, offset) => ({ type: types.GET_TRANSACTION_DEPOSIT_REQUEST, userId, offset });
export const getTransactionDepositRequestsSuccess = (data, offset) => ({ type: types.GET_TRANSACTION_DEPOSIT_SUCCESS, payload: data, offset });
export const getTransactionDepositRequestsFailure = (message) => ({ type: types.GET_TRANSACTION_DEPOSIT_FAILURE, message });

export const getTransactionRequestRequest = (userId, offset) => ({ type: types.GET_TRANSACTION_REQUEST_REQUEST, userId, offset });
export const getTransactionRequestSuccess = (data, offset) => ({ type: types.GET_TRANSACTION_REQUEST_SUCCESS, payload: data, offset });
export const getTransactionRequestFailure = (message) => ({ type: types.GET_TRANSACTION_REQUEST_FAILURE, message });

export const getTransactionStatementRequest = (userId, offset) => ({ type: types.GET_TRANSACTION_STATEMENT_REQUEST, userId, offset });
export const getTransactionStatementSuccess = (data, offset) => ({ type: types.GET_TRANSACTION_STATEMENT_SUCCESS, payload: data, offset });
export const getTransactionStatementFailure = (message) => ({ type: types.GET_TRANSACTION_STATEMENT_FAILURE, message });

export const getTransactionWithdrawalRequest = (userId, offset) => ({ type: types.GET_TRANSACTION_WITHDRAWAL_REQUEST, userId, offset });
export const getTransactionWithdrawalSuccess = (data, offset) => ({ type: types.GET_TRANSACTION_WITHDRAWAL_SUCCESS, payload: data, offset });
export const getTransactionWithdrawalFailure = (message) => ({ type: types.GET_TRANSACTION_WITHDRAWAL_FAILURE, message });
