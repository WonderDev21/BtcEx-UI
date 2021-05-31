import types from '../../constants/ActionTypes';

export const requestLoginOTP = (reqData) => ({ type: types.LOGIN_OTP_REQUEST, data: reqData });
export const loginOTPSuccess = (data) => ({ type: types.LOGIN_OTP_SUCCESS, payload: data });
export const loginOTPFailure = (message) => ({ type: types.LOGIN_OTP_FAILURE, message });

export const requestLogin = (reqData) => ({ type: types.LOGIN_REQUEST, data: reqData });
export const loginSuccess = (data) => ({ type: types.LOGIN_SUCCESS, payload: data });
export const loginFailure = (message) => ({ type: types.LOGIN_FAILURE, message });

export const requestResendOTP = () => ({ type: types.LOGIN_RESEND_OTP_REQUEST });
export const resendOTPSuccess = (data) => ({ type: types.LOGIN_RESEND_OTP_SUCCESS, payload: data });
export const resendOTPFailure = (message) => ({ type: types.LOGIN_RESEND_OTP_FAILURE, message });

export const requestSignup = (reqObj) => ({ type: types.SIGN_UP_REQUEST, data: reqObj });
export const signupSuccess = (data) => ({ type: types.SIGN_UP_SUCCESS, payload: data });
export const signupFailure = (message) => ({ type: types.SIGN_UP_FAILURE, message });

export const requestLogout = () => ({ type: types.LOGOUT_USER_REQUEST });
export const logoutSuccess = () => ({ type: types.LOGOUT_USER_SUCCESS });
export const logoutFailure = () => ({ type: types.LOGOUT_USER_FAILURE });

export const forgetPasswordRequest = (reqObj) => ({ type: types.POST_FORGET_PASSWORD_REQUEST, data: reqObj });
export const forgetPasswordSuccess = (data) => ({ type: types.POST_FORGET_PASSWORD_SUCCESS, payload: data });
export const forgetPasswordFailure = (message) => ({ type: types.POST_FORGET_PASSWORD_FAILURE, message });

export const updateForgetPasswordRequest = (reqObj) => ({ type: types.POST_UPDATE_FORGET_PASSWORD_REQUEST, data: reqObj });
export const updateForgetPasswordSuccess = (data) => ({ type: types.POST_UPDATE_FORGET_PASSWORD_SUCCESS, payload: data });
export const updateForgetPasswordFailure = (message) => ({ type: types.POST_UPDATE_FORGET_PASSWORD_FAILURE, message });

export const resetForgetPassword = () => ({ type: types.RESET_FORGET_PASSWORD });

export const userInfoRequest = (reqObj) => ({ type: types.GET_USER_INFO_REQUEST, data: reqObj });
export const userInfoSuccess = (data) => ({ type: types.GET_USER_INFO_SUCCESS, payload: data }); 
export const userInfoFailure = (message) => ({ type: types.GET_USER_INFO_FAILURE, message });
