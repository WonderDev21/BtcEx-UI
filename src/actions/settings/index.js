import types from '../../constants/ActionTypes';

export const changePasswordRequest = (userId, data) => ({ type: types.POST_CHANGE_PASSWORD_REQUEST, userId, data });
export const changePasswordSuccess = (data) => ({ type: types.POST_CHANGE_PASSWORD_SUCCESS, payload: data });
export const changePasswordFailure = (message) => ({ type: types.POST_CHANGE_PASSWORD_FAILURE, message });

export const get2FACodeRequest = (userId) => ({ type: types.GET_2FA_CODE_REQUEST, userId });
export const get2FACodeSuccess = (data) => ({ type: types.GET_2FA_CODE_SUCCESS, payload: data });
export const get2FACodeFailure = (message) => ({ type: types.GET_2FA_CODE_FAILURE, message });

export const enable2FACodeRequest = (reqObj) => ({ type: types.POST_ENABLE_2FA_CODE_REQUEST, data: reqObj });
export const enable2FACodeSuccess = (data) => ({ type: types.POST_ENABLE_2FA_CODE_SUCCESS, payload: data });
export const enable2FACodeFailure = (message) => ({ type: types.POST_ENABLE_2FA_CODE_FAILURE, message });

export const disable2FACodeRequest = (reqObj) => ({ type: types.POST_DISABLE_2FA_CODE_REQUEST, data: reqObj });
export const disable2FACodeSuccess = (data) => ({ type: types.POST_DISABLE_2FA_CODE_SUCCESS, payload: data });
export const disable2FACodeFailure = (message) => ({ type: types.POST_DISABLE_2FA_CODE_FAILURE, message });

// action for handling modal
export const hideCodesModal = () => ({ type: "HIDE_2FA_CODES_MODAL" });
