import types from '../../constants/ActionTypes';
import initialState from '../../store/initialState';

export function requests(state = initialState.requests, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_REQUEST_REQUEST: {
      const newState = [].concat(state)
      return newState;
    }
    case types.GET_TRANSACTION_REQUEST_SUCCESS: {
      if (!action.offset) {
        return action.payload;
      } else {
        return [...state, ...action.payload];
      }
    }
    case types.GET_TRANSACTION_REQUEST_FAILURE: {
      const newState = [].concat(state)
      return newState;
    }
    default:
      return state;
  }
}

export function account(state = initialState.account, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_STATEMENT_REQUEST: {
      return state;
    }
    case types.GET_TRANSACTION_STATEMENT_SUCCESS: {
      let statement;
      if (!action.offset) {
        statement = action.payload;
      } else {
        statement = state.statement.concat(action.payload);
      }
      return Object.assign({}, state, { statement });
    }
    case types.GET_TRANSACTION_STATEMENT_FAILURE: {
      return state;
    }
    default:
      return state;
  }
}

export function transactions(state = initialState.transactions, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_DEPOSIT_REQUEST: {
      return state;
    }
    case types.GET_TRANSACTION_DEPOSIT_SUCCESS: {
      let deposits;
      if (!action.offset) {
        deposits = action.payload;
      } else {
        deposits = state.deposits.concat(action.payload);
      }
      return Object.assign({}, state, { deposits });
    }
    case types.GET_TRANSACTION_DEPOSIT_FAILURE: {
      return state;
    }
    // Withdawal
    case types.GET_TRANSACTION_WITHDRAWAL_REQUEST: {
      return state;
    }
    case types.GET_TRANSACTION_WITHDRAWAL_SUCCESS: {
      let withdrawals;
      if (!action.offset) {
        withdrawals = action.payload;
      } else {
        withdrawals = state.withdrawals.concat(action.payload);
      }
      return Object.assign({}, state, { withdrawals });
    }
    case types.GET_TRANSACTION_WITHDRAWAL_FAILURE: {
      return state;
    }
    default:
      return state;
  }
}
