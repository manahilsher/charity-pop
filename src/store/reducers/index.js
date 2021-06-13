import { combineReducers } from 'redux';
import balloonsReducer from './balloonsReducer';
import campaignsReducer from './campaignsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  balloonsReducer,
  campaignsReducer,
  usersReducer
});
