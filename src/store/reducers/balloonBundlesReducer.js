import {
  FETCH_BALLOONBUNDLES,
  CREATE_BALLOONBUNDLE,
  FETCH_BALLOONBUNDLE,
  UPDATE_BALLOONBUNDLE,
  DELETE_BALLOONBUNDLE
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { balloonBundles: [] }, action) => {
  switch (action.type) {
    case FETCH_BALLOONBUNDLES:
      return { ...state, balloonBundles: action.payload };
    case FETCH_BALLOONBUNDLE:
      return { ...state, selectedBalloonBundle: action.payload };
    case DELETE_BALLOONBUNDLE:
      let newStateWithDeletedBalloonBundle = { ...state };
      newStateWithDeletedBalloonBundle.balloonBundles =
        state.balloonBundles.filter(a => a.id !== action.payload.id);
      return newStateWithDeletedBalloonBundle;
    case UPDATE_BALLOONBUNDLE:
      console.log('update balloonBundle in reducer');
      console.log(action.payload);
      let newStateWithUpdatedBalloonBundle = { ...state };
      let balloonBundleIdx = state.balloonBundles.findIndex(
        bb => bb.id === action.payload.id
      );
      newStateWithUpdatedBalloonBundle.balloonBundles[balloonBundleIdx] =
        action.payload;
      return newStateWithUpdatedBalloonBundle;
    case CREATE_BALLOONBUNDLE:
      console.log('create balloonBundle in reducer');
      console.log(action.payload);
      let newStateWithCreatedBalloonBundle = { ...state };
      newStateWithCreatedBalloonBundle.balloonBundles.push(action.payload);
      console.log(newStateWithCreatedBalloonBundle);
      return newStateWithCreatedBalloonBundle;
    default:
      return state;
  }
};
