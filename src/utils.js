import { flow, get, camelCase } from 'lodash/fp';

export const getErrorMessage = flow(get('message'), camelCase);
