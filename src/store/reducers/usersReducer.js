import {
  FETCH_USERS,
  CREATE_USER,
  FETCH_USER,
  UPDATE_USER,
  DELETE_USER
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { users: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_USER:
      return { ...state, selectedUser: action.payload };
    case DELETE_USER:
      let newStateWithDeletedUser = { ...state };
      newStateWithDeletedUser.users = state.users.filter(
        a => a.id !== action.payload.id
      );
      return newStateWithDeletedUser;
    case UPDATE_USER:
      console.log('update user in reducer');
      console.log(action.payload);
      let newStateWithUpdatedUser = { ...state };
      let userIdx = state.users.findIndex(a => a.id === action.payload.id);
      newStateWithUpdatedUser.users[userIdx] = action.payload;
      return newStateWithUpdatedUser;
    case CREATE_USER:
      console.log('create user in reducer');
      console.log(action.payload);
      let newStateWithCreatedUser = { ...state };
      newStateWithCreatedUser.users.push(action.payload);
      console.log(newStateWithCreatedUser);
      return newStateWithCreatedUser;
    default:
      return state;
  }
};
