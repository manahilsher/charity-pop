import {
  FETCH_BALLOONS,
  CREATE_BALLOON,
  FETCH_BALLOON,
  UPDATE_BALLOON,
  DELETE_BALLOON
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { balloons: [] }, action) => {
  switch (action.type) {
    case FETCH_BALLOONS:
      return {
        ...state,
        [`${action.payload.bbID}-balloons`]: action.payload.balloons
      };
    // return { ...state, balloons: action.payload };
    case FETCH_BALLOON:
      return { ...state, selectedBalloon: action.payload };
    case DELETE_BALLOON:
      let newStateWithDeletedBalloon = { ...state };
      newStateWithDeletedBalloon.balloons = state.balloons.filter(
        a => a.id !== action.payload.id
      );
      return newStateWithDeletedBalloon;
    case UPDATE_BALLOON:
      console.log('update balloon in reducer');
      console.log(action.payload);
      let newStateWithUpdatedBalloon = { ...state };
      let balloonIdx = state.balloons.findIndex(
        a => a.id === action.payload.id
      );
      newStateWithUpdatedBalloon.balloons[balloonIdx] = action.payload;
      return newStateWithUpdatedBalloon;
    case CREATE_BALLOON:
      console.log('create balloon in reducer');
      console.log(action.payload);
      let newStateWithCreatedBalloon = { ...state };
      newStateWithCreatedBalloon.balloons.push(action.payload);
      console.log(newStateWithCreatedBalloon);
      return newStateWithCreatedBalloon;
    default:
      return state;
  }
};
