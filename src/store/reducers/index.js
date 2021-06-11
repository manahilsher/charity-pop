import { combineReducers } from 'redux';
import balloonsReducer from './balloonsReducer';
import campaignsReducer from './campaignsReducer';

export default combineReducers({
  balloonsReducer,
  campaignsReducer
});
