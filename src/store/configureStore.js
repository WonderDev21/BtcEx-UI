import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../reducers';
import rootSaga from '../sagas';
import initialState from './initialState';

export const history = createBrowserHistory({
  basename: '/exchange'
});

const configureStore = state => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const middleware = [sagaMiddleware, routerMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    middleware.push(createLogger({ collapsed: true }));
  }
  const store = createStore(
    createRootReducer(history),
    state,
    compose(applyMiddleware(...middleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore(initialState);
