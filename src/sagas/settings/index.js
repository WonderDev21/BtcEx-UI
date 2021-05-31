import { call, put, takeLatest } from 'redux-saga/effects';
import { progressStart, progressStop } from '../../actions';
import * as actions from '../../actions/settings/index';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/settings/index';
import { userInfoRequest } from '../../actions/auth/index';

// ****************** CHANGE PASSWORD ******************

function* handleChangePasswordRequests(args) {
  try {
    yield put(progressStart());
    const requests = yield call(apiCall.updateUserPassword, args.userId, args.data);
    yield put(actions.changePasswordSuccess(requests, args.offset));
    yield put(progressStop());
  } catch (e) {
    if (e instanceof Error) {
      yield put(progressStop());
      yield put(actions.changePasswordFailure(e.message));
    } else {
      yield put(actions.changePasswordFailure("An unknown error occured in login."));
    }
  }
}

// ****************** GET 2FA COde ******************

function* handle2FACodeRequest(args) {
  try {
    const code = yield call(apiCall.get2FACode, args.userId);
    yield put(actions.get2FACodeSuccess(code));
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.get2FACodeFailure(e.message));
    } else {
      yield put(actions.get2FACodeFailure("An unknown error occured in login."));
    }
  }
}

// ****************** ENABLE 2FA COde ******************

function* handleEnable2FACodeRequest(args) {
  try {
    const code = yield call(apiCall.enable2FACode, args.data.userId, args.data.code);
    yield put(actions.enable2FACodeSuccess(code.securityCodes));
    yield put(userInfoRequest());
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.enable2FACodeFailure(e.message));
    } else {
      yield put(actions.enable2FACodeFailure("An unknown error occured in login."));
    }
  }
}

// ****************** DISABLE 2FA COde ******************

function* handleDisable2FACodeRequest(args) {
  try {
    const code = yield call(apiCall.disable2FACode, args.data.userId, args.data.code);
    yield put(actions.disable2FACodeSuccess(code));
    yield put(userInfoRequest());
  } catch (e) {
    if (e instanceof Error) {
      yield put(actions.disable2FACodeFailure(e.message));
    } else {
      yield put(actions.disable2FACodeFailure("An unknown error occured in login."));
    }
  }
}

export default function* loadSettingsSaga() {
  yield takeLatest(types.POST_CHANGE_PASSWORD_REQUEST, handleChangePasswordRequests);
  yield takeLatest(types.GET_2FA_CODE_REQUEST, handle2FACodeRequest);
  yield takeLatest(types.POST_ENABLE_2FA_CODE_REQUEST, handleEnable2FACodeRequest);
  yield takeLatest(types.POST_DISABLE_2FA_CODE_REQUEST, handleDisable2FACodeRequest);
}
