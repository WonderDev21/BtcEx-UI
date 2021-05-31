import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';

export default function cryptoSummary(state = initialState.cryptoSummary, action) {
  switch (action.type) {
    case types.GET_CRYPTO_SUMMARY_REQUEST: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.GET_CRYPTO_SUMMARY_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      return newState;
    }
    case types.GET_CRYPTO_SUMMARY_FAILURE: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
}
