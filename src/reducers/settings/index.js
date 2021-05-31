import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';

export function changePassword(state = initialState.changePassword, action) {
  switch (action.type) {
    case types.POST_CHANGE_PASSWORD_REQUEST: {
      const newState = Object.assign({}, state);
      newState.loader = true;
      newState.error = null;
      return newState;
    }
    case types.POST_CHANGE_PASSWORD_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.loader = false;
      return newState;
    }
    case types.POST_CHANGE_PASSWORD_FAILURE: {
      const newState = Object.assign({}, state);
      newState.loader = false;
      newState.error = action.message;
      return newState;
    }
    default:
      return state;
  }
}

export function TFACode(state = initialState.TFACode, action) {
  switch(action.type) {
    case types.GET_2FA_CODE_REQUEST: 
    case types.POST_ENABLE_2FA_CODE_REQUEST: {
      const newState = Object.assign({}, state);
      newState.isRequesting = true;
      newState.isSuccess = false;
      newState.isError = false;
      return newState;
    }
    case types.GET_2FA_CODE_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isRequesting = false;
      newState.isSuccess = true;
      newState.imageUrl = action.payload;
      newState.isError = false;
      return newState;
    }
    case types.GET_2FA_CODE_FAILURE:
    case types.POST_ENABLE_2FA_CODE_FAILURE: {
      const newState = Object.assign({}, state);
      newState.isRequesting = false;
      newState.isSuccess = false;
      newState.isError = true;
      newState.errorMsg = action.message;
      return newState;
    }
    case types.POST_ENABLE_2FA_CODE_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.isRequesting = false;
      newState.isSuccess = true;
      newState.securityCodes = action.payload;
      newState.isError = false;
      return newState;
    }
    case "HIDE_2FA_CODES_MODAL": {
      const newState = Object.assign({}, state);
      newState.isRequesting = false;
      newState.isSuccess = false;
      newState.securityCodes = null;
      newState.isError = false;
      newState.errorMsg = null;
      return newState;
    }
    default:
      return state;
  }
}
