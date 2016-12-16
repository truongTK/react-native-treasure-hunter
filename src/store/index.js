import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducers from '../reducers';
import config from '../config';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

//loger
const loggerMiddleware = createLogger({
  predicate: (getState, action) => isDebuggingInChrome
});

const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore);

export default function makeStore() {
  const store = createStoreWithMiddleware(rootReducers);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
