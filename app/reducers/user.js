import type {Action} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  sharedSchedule: null,
  id: null,
  name: null,
}

function user(state: State = initialState, action: Action): State {
  if (action.type == 'LOGGED_IN') {
    let {id, name, sharedSchedule} = action.data;
    if (sharedSchedule === undefined) {
      sharedSchedule = null;
    }
    return {
      isLoggedIn: true,
      hasSkippedLogin: false,
      sharedSchedule,
      id,
      name,
    };
  }
  if (action.type === 'SKIPPED_LOGIN') {
    return {
      isLoggedIn: false,
      hasSkippedLogin: true,
      sharedSchedule: null,
      id: null,
      name: null,
    };
  }
  return state;
}

module.exports = user;