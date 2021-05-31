import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions/transactions/index';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/transactions/index';

// ****************** FETCH DEPOSITS ******************

function* handleFetchTransactionDepositRequests(args) {
  try {
    const requests = yield call(apiCall.getAllDepositRequests, args.userId, args.offset);
    yield put(actions.getTransactionRequestSuccess(requests, args.offset));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.getTransactionRequestFailure(e.message));
    } else {
      yield put(actions.getTransactionRequestFailure("An unknown error occured in login."));
    }
  }
}

// ****************** FETCH STATMENT ******************

function* handleFetchTransactionStatement(args) {
  try {
    const statements = yield call(apiCall.getAccountStatement, args.userId, args.offset);
    yield put(actions.getTransactionStatementSuccess(statements, args.offset));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.getTransactionStatementFailure(e.message));
    } else {
      yield put(actions.getTransactionStatementFailure("An unknown error occured in login."));
    }
  }
}

// ****************** FETCH DEPOSIT ******************

function* handleFetchTransactionDeposits(args) {
  try {
    const deposits = yield call(apiCall.getUserTransactions, args.userId, args.offset, 'ADD_TO_PLATFORM');
    yield put(actions.getTransactionDepositRequestsSuccess(deposits, args.offset));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.getTransactionDepositRequestsFailure(e.message));
    } else {
      yield put(actions.getTransactionDepositRequestsFailure("An unknown error occured in login."));
    }
  }
}

// ****************** FETCH WITHDRAWAL ******************

function* handleFetchTransactionWithdrawals(args) {
  try {
    const deposits = yield call(apiCall.getUserTransactions, args.userId, args.offset, 'WITHDRAW_FROM_PLATFORM');
    yield put(actions.getTransactionWithdrawalSuccess(deposits, args.offset));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.getTransactionWithdrawalFailure(e.message));
    } else {
      yield put(actions.getTransactionWithdrawalFailure("An unknown error occured in login."));
    }
  }
}

export default function* loadTransactionSaga() {
  yield takeLatest(types.GET_TRANSACTION_REQUEST_REQUEST, handleFetchTransactionDepositRequests);
  yield takeLatest(types.GET_TRANSACTION_STATEMENT_REQUEST, handleFetchTransactionStatement);
  yield takeLatest(types.GET_TRANSACTION_DEPOSIT_REQUEST, handleFetchTransactionDeposits);
  yield takeLatest(types.GET_TRANSACTION_WITHDRAWAL_REQUEST, handleFetchTransactionWithdrawals);
}
