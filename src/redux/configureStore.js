import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocket';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rocketsReducer,missionsReducer,
});
const store = createStore(reducer,
  applyMiddleware(logger, thunk));


export default store;
