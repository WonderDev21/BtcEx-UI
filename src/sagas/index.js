// Root Saga
import { all, fork } from 'redux-saga/effects';
import loadAuthSaga from './auth/index';
import loadTradeSaga from './app/index';
import loadCryptoSummarySaga from './cryptoSummary/index';
import loadTransactionSaga from "./transactions/index";
import loadSettingsSaga from "./settings/index";
import loadAccountSage from "./accounts/index";

function* rootSaga() {
  yield all([
    fork(loadAuthSaga),
    fork(loadTradeSaga),
    fork(loadCryptoSummarySaga),
    fork(loadTransactionSaga),
    fork(loadSettingsSaga),
    fork(loadAccountSage),
  ]);
}

export default rootSaga;