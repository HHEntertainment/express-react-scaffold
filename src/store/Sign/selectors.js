import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

const getSignState = get('Sign');

export const getIsMutationSignInRequested = createSelector(getSignState, get('isMutationSignInRequested'));
export const getIsMutationSignUpRequested = createSelector(getSignState, get('isMutationSignUpRequested'));
