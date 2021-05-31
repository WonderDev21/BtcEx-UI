import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions/cryptoSummary/index';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/cryptoSummary/index';

// ****************** FETCH CRYPTO SUMMARY ******************

function* handleFetchCryptoSummary() {
  try {
    const cryptoSummary = yield call(apiCall.getCryptoSummary);
    yield put(actions.getCryptoSummarySuccess(cryptoSummary));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.getCryptoSummaryFailure(e.message));
    } else {
      yield put(actions.getCryptoSummaryFailure("An unknown error occured in login."));
    }
  }
}

export default function* loadCryptoSummarySaga() {
  yield takeLatest(types.GET_CRYPTO_SUMMARY_REQUEST, handleFetchCryptoSummary);
}
