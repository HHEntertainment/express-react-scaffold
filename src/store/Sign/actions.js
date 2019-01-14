import { MUTATION_SIGN_IN, MUTATION_SIGN_UP } from './actionTypes';

export const mutationSignIn = (tel, password) => dispatch =>
  dispatch({
    type: MUTATION_SIGN_IN,
    tel,
    password,
  });

  export const mutationSignUp = (tel, password) => dispatch =>
  dispatch({
    type: MUTATION_SIGN_UP,
    tel,
    password,
  });
