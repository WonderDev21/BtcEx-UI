import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions/app/index';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/app/index';

// ****************** FETCH TRADE FEE ******************

function* handleFetchTradeFee() {
  try {
    const tradeFees = yield call(apiCall.getTradeFees);
    yield put(actions.tradeFeeSuccess(tradeFees));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.tradeFeeFailure(e.message));
    } else {
      yield put(actions.tradeFeeFailure("An unknown error occured in login."));
    }
  }
}

export default function* loadTradeSaga() {
  yield takeLatest(types.TRADE_FEE_REQUEST, handleFetchTradeFee);
}
