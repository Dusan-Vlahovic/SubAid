import { Dispatch } from 'redux';
import { AUTH_ACTIONS } from '../action-types';

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_ACTIONS.SET_ACCOUNT,
    payload: {
      username,
      password
    }
  });
};

export const logoutAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_ACTIONS.SET_ACCOUNT,
    payload: null
  })
}