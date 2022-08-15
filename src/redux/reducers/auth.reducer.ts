import { AUTH_ACTIONS } from '../action-types';

export interface AuthState {
  account: any;
}

const initialState: AuthState = {
  account: null,
}

const authReducer = (state: AuthState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.SET_ACCOUNT:
      return {
        ...state,
        account: payload,
      };

    default:
      return state;
  }
}

export default authReducer;