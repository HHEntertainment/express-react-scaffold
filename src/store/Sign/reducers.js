import { flow, set } from 'lodash/fp';

import {
  MUTATION_SIGN_IN,
  MUTATION_SIGN_IN_SUCCESS,
  MUTATION_SIGN_IN_FAILED,
  MUTATION_SIGN_UP,
  MUTATION_SIGN_UP_SUCCESS,
  MUTATION_SIGN_UP_FAILED,
} from './actionTypes';

export default {
  [MUTATION_SIGN_IN]: state => set('isMutationSignInRequested', true)(state),
  /* TODO : 로그인 Token 저장에 관한 처리 할 것 */
  [MUTATION_SIGN_IN_SUCCESS]: (state, { token }) => flow(set('isMutationSignInRequested', false))(state),
  [MUTATION_SIGN_IN_FAILED]: state => set('isMutationSignInRequested', false)(state),

  [MUTATION_SIGN_UP]: state => set('isMutationSignUpRequested', true)(state),
  /* TODO : 로그인 Token 저장에 관한 처리 할 것 */
  [MUTATION_SIGN_UP_SUCCESS]: (state, { token }) => flow(set('isMutationSignUpRequested', false))(state),
  [MUTATION_SIGN_UP_FAILED]: state => set('isMutationSignUpRequested', false)(state),
};
