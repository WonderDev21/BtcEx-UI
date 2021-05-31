import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';

export default function app(state = initialState.app, action) {
  switch (action.type) {
    case types.TRADE_FEE_REQUEST: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case types.TRADE_FEE_SUCCESS: {
      const newState = Object.assign({}, state, { fees: action.payload.fees, feeStructure: action.payload.feeStructure });
      return newState;
    }
    case types.TRADE_FEE_FAILURE: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
}
