import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth, { updatePassword } from './auth/index';
import app from './app/index';
import cryptoSummary from './cryptoSummary/index';
import { requests, account, transactions } from './transactions/index';
import { changePassword, TFACode } from './settings/index';
import { ticker, walletAddress, depositRequest, withdraw } from './accounts/index';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth, updatePassword,
    app,
    cryptoSummary,
    requests,
    account,
    transactions,
    changePassword, TFACode,
    ticker, walletAddress, depositRequest, withdraw
  });
export default createRootReducer;
