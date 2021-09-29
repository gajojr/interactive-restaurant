import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(/*sagaMiddleware*/))
);

export default store;