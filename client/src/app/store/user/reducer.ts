import { SaveUserData, AuthenticationActionTypes } from './action';
import { LoggedInUserModel } from 'src/app/core/models/authentication/logged-in-user';

const initialState: LoggedInUserModel = {
  username: '',
  email: '',
  token: ''
}

function saveUserData(state, payload) {
  const { ...userData } = payload;

  return {
    ...state,
    ...userData
  }
}


export function userReducer(state = initialState, action: AuthenticationActionTypes) {
  switch (action.type) {
    case SaveUserData:
      return saveUserData(state, action.payload);
    default:
      return state;
  }
}