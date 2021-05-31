import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions/accounts/index';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/accounts/index';

// ****************** GET TICKER ******************

function* handleTickerRequest(args) {
  try {
    const tickers = yield call(apiCall.getTickers);
    yield put(actions.tickerSuccess(tickers));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.tickerFailure(e.message));
    } else {
      yield put(actions.tickerFailure("An unknown error occured in getting tickers."));
    }
  }
}

// ****************** GET EXCHANGE RATES ******************

function* handleExchangeRateRequest(args) {
  try {
    const exchangeRates = yield call(apiCall.getExchangeRates);
    yield put(actions.exchangeRateSuccess(exchangeRates));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.exchangeRateFailure(e.message));
    } else {
      yield put(actions.exchangeRateFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

// ****************** GET PRICES ******************

function* handlePriceRequest(args) {
  try {
    const prices = yield call(apiCall.getPrices);
    yield put(actions.priceSuccess(prices));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.priceFailure(e.message));
    } else {
      yield put(actions.priceFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

// ****************** GET WALLET ADDRESS ******************

function* handleGetWalletRequest(args) {
  try {
    const address = yield call(apiCall.getWalletAddress, args.data.userId, args.data.currency);
    yield put(actions.walletAddressSuccess(address));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.walletAddressFailure(e.message));
    } else {
      yield put(actions.walletAddressFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

// ****************** POST DEPOSIT REQUEST ******************

function* handleDepositRequest(args) {
  try {
    const address = yield call(apiCall.submitDepositRequest, args.data.userId, args.data.data);
    yield put(actions.depositRequestSuccess(address));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.depositRequestFailure(e.message));
    } else {
      yield put(actions.depositRequestFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

// ****************** POST WITHDRAW Amount REQUEST ******************

function* handleWithdrawAmountRequest(args) {
  try {
    const resp = yield call(apiCall.withdrawAmount, args.data);
    yield put(actions.withdrawAmountSuccess(resp));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.withdrawAmountFailure(e.message));
    } else {
      yield put(actions.withdrawAmountFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

// ****************** POST WITHDRAW OTP REQUEST ******************

function* handleWithdrawOTPRequest(args) {
  try {
    const resp = yield call(apiCall.withdrawByOTP, args.data.userId, args.data);
    yield put(actions.withdrawOTPSuccess(resp));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.withdrawOTPFailure(e.message));
    } else {
      yield put(actions.withdrawOTPFailure("An unknown error occured in getting exchange rates."));
    }
  }
}

export default function* loadSettingsSaga() {
  yield takeLatest(types.GET_TICKER_REQUEST, handleTickerRequest);
  yield takeLatest(types.GET_EXCHANGE_RATES_REQUEST, handleExchangeRateRequest);
  yield takeLatest(types.GET_PRICE_REQUEST, handlePriceRequest);
  yield takeLatest(types.GET_WALLET_ADDRESS_REQUEST, handleGetWalletRequest);
  yield takeLatest(types.POST_DEPOSIT_REQUEST_REQUEST, handleDepositRequest);
  yield takeLatest(types.POST_WITHDRAW_OTP_REQUEST, handleWithdrawOTPRequest);
  yield takeLatest(types.POST_WITHDRAW_AMOUNT_REQUEST, handleWithdrawAmountRequest);
}
