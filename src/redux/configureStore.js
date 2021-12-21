import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocket';

const reducer = combineReducers({
  rocketsReducer,
});
const store = createStore(reducer,
  applyMiddleware(logger, thunk));
export default store;
