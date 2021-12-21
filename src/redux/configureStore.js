import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
