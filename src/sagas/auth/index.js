import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from '../../actions/auth/index';
import { progressStart, progressStop } from '../../actions';
import types from '../../constants/ActionTypes';
import * as apiCall from '../../api/auth/index';
// import { isSuccess } from '../../common/actionUtils';
import AppConstants from '../../constants/AppConstants';

const { APP_NAME } = AppConstants;

// ****************** LOGIN && LOGIN OTP ******************

function* handleLoginOTP(args) {
  try {
    yield put(progressStart());
    const data = yield call(apiCall.getLoginOTP, args.data);
    yield put(actions.loginOTPSuccess(data));
    yield put(push('/otp-2'));
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.loginOTPFailure(e.message));
    } else {
      yield put(actions.loginOTPFailure("An unknown error occured in login."));
    }
  }
}

function* handleLogin(args) {
  try {
    yield put(progressStart());
    const data = yield call(apiCall.loginWithOTP, args.data);
    yield put(actions.loginSuccess(data));
    // yield put(push('/market'));
    window.location.href = "/market";
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.loginFailure(e.message));
    } else {
      yield put(actions.loginFailure("An unknown error occured in login."));
    }
  }
}

function* handleResendOTP() {
  try {
    yield put(progressStart());
    const data = yield call(apiCall.regenrateOTP);
    yield put(actions.resendOTPSuccess(data));
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.resendOTPFailure(e.message));
    } else {
      yield put(actions.resendOTPFailure("An unknown error occured in login."));
    }
  }
}

// ****************** SIGNUP ******************

function* handleSignup(args) {
  try {
    yield put(progressStart());
    const respData = yield call(apiCall.registerUser, args.data);
    yield put(actions.signupSuccess(respData));
    window.localStorage.removeItem(`${APP_NAME}-referredby`);
    yield put(push(`/verify?email=${args.data.email}`));
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.signupFailure(e.message));
    } else {
      yield put(actions.signupFailure("An unknown error occured in signup."));
    }
  }
}

// ****************** LOGOUT ******************

function* handleLogout(args) {
  try {
    yield put(progressStart());
    const respData = yield call(apiCall.logoutUser);
    yield put(actions.logoutSuccess(respData));
    yield put(progressStop());
    yield put(push("/signin"));
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.logoutFailure(e.message));
    } else {
      yield put(actions.logoutFailure("An unknown error occured in signup."));
    }
    yield put(push("/signin"));
  }
}

// ****************** FORGET PASSWORD ******************

function* handleForgetPassword(args) {
  try {
    yield put(progressStart());
    const respData = yield call(apiCall.sendForgotPasswordEmail, args.data);
    yield put(actions.forgetPasswordSuccess(respData));
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.forgetPasswordFailure(e.message));
    } else {
      yield put(actions.forgetPasswordFailure("An unknown error occured in signup."));
    }
  }
}

// ****************** UPDATE FORGET PASSWORD ******************

function* handleUpdateForgetPassword(args) {
  try {
    yield put(progressStart());
    const respData = yield call(apiCall.updateForgotPassword, args.data);
    yield put(actions.updateForgetPasswordSuccess(respData));
    yield put(progressStop());
  } catch (e) {
    yield put(progressStop());
    if (e instanceof Error) {
      yield put(actions.updateForgetPasswordFailure(e.message));
    } else {
      yield put(actions.updateForgetPasswordFailure("An unknown error occured in signup."));
    }
  }
}

// ****************** GET USER INFO ******************

function* handleUserInfo(args) {
  try {
    const respData = yield call(apiCall.userInfo);
    yield put(actions.userInfoSuccess(respData));
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      yield put(actions.userInfoFailure(e.message));
    } else {
      yield put(actions.userInfoFailure("An unknown error occured in signup."));
    }
  }
}

export default function* loadAuthSaga() {
  yield takeLatest(types.LOGIN_OTP_REQUEST, handleLoginOTP);
  yield takeLatest(types.LOGIN_REQUEST, handleLogin);
  yield takeLatest(types.LOGIN_RESEND_OTP_REQUEST, handleResendOTP);
  yield takeLatest(types.SIGN_UP_REQUEST, handleSignup);
  yield takeLatest(types.GET_USER_INFO_REQUEST, handleUserInfo);
  yield takeLatest(types.POST_FORGET_PASSWORD_REQUEST, handleForgetPassword);
  yield takeLatest(types.POST_UPDATE_FORGET_PASSWORD_REQUEST, handleUpdateForgetPassword);
  yield takeLatest(types.GET_USER_INFO_REQUEST, handleUserInfo);
  yield takeLatest(types.LOGOUT_USER_REQUEST, handleLogout);
}
