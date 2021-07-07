import { combineReducers } from 'redux';
import balloonsReducer from './balloonsReducer';
import campaignsReducer from './campaignsReducer';
import balloonBundlesReducer from './balloonBundlesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  balloonsReducer,
  campaignsReducer,
  balloonBundlesReducer,
  usersReducer
});
