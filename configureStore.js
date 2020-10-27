import { combineReducers, createStore, applyMiddleware } from 'redux';
import user from './reducers/user';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducers = combineReducers({
  user,
});

const configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
