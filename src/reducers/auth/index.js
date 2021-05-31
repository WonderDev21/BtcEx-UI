import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';

function clearCookie() {
  document.cookie.split(';').forEach((c) => { document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`); });
}

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.SIGN_UP_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isSignupRequest = true;
      newState.isSignupSuccess = false;
      newState.isSignupFailed = false;
      newState.errorMsg = null;
      return newState;
    }
    case types.SIGN_UP_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isSignupRequest = false;
      newState.isSignupSuccess = true;
      newState.isSignupFailed = false;
      newState.errorMsg = null;
      return newState;
    }
    case types.SIGN_UP_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isSignupRequest = false;
      newState.isSignupSuccess = false;
      newState.isSignupFailed = true;
      newState.errorMsg = action.message;
      return newState;
    }
    case types.LOGIN_OTP_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isLoginRequest = true;
      newState.isLoginSuccess = false;
      newState.isLoginFailed = false;
      newState.errorMsg = null;
      return newState;
    }
    case types.LOGIN_OTP_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isLoginRequest = false;
      newState.isLoginSuccess = true;
      newState.isLoginFailed = false;
      newState.loginData = action.payload;
      newState.errorMsg = null;
      return newState;
    }
    case types.LOGIN_OTP_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isLoginRequest = false;
      newState.isLoginSuccess = false;
      newState.isLoginFailed = true;
      newState.errorMsg = action.message;
      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = Object.assign({}, state);
      newState.errorMsg = null;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isLoggedIn = true;
      newState.errorMsg = null;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isLoggedIn = false;
      newState.errorMsg = action.message;
      return newState;
    }
    case types.LOGOUT_USER_SUCCESS:
    case types.LOGOUT_USER_FAILURE:
      clearCookie();
      return {};
    case types.GET_USER_INFO_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isLoggedIn = false;
      newState.isUserInfoLoading = true;
      return newState;
    }
    case types.GET_USER_INFO_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      newState.isLoggedIn = true;
      newState.isUserInfoLoading = false;
      return newState;
    }
    case types.GET_USER_INFO_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isLoggedIn = false;
      newState.isUserInfoLoading = false;
      newState.errorMsg = action.message;
      return newState;
    }
    default:
      return state;
  }
}

export function updatePassword(state = initialState.updatePassword, action) {
  switch(action.type) {
    case types.POST_FORGET_PASSWORD_REQUEST:
    case types.POST_UPDATE_FORGET_PASSWORD_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = true;
      newState.isSuccess = false;
      newState.isError = false;
      newState.message = null;
      return newState;
    }
    case types.POST_FORGET_PASSWORD_SUCCESS:
    case types.POST_UPDATE_FORGET_PASSWORD_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      newState.isSubmitting = false;
      newState.isSuccess = true;
      newState.isError = false;
      newState.message = null;
      return newState;
    }
    case types.POST_FORGET_PASSWORD_FAILURE:
    case types.POST_UPDATE_FORGET_PASSWORD_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.isSuccess = false;
      newState.isError = true;
      newState.message = action.message;
      return newState;
    }
    case types.RESET_FORGET_PASSWORD: {
      const newState = Object.assign({}, state);
      newState.isSubmitting = false;
      newState.isSuccess = false;
      newState.isError = false;
      newState.message = null;
      return newState;
    }
    default:
      return state;
  }
}
