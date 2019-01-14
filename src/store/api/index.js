import { set, get, flow, isNil, merge, omitBy, replace, trim } from 'lodash/fp';
import { REQUEST_URL } from '../../constants';

const mergeHeaders = headers => flow(merge(headers), omitBy(isNil));

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function postData(action) {
  const { query } = action;
  const purifiedHeaders = set('Access-Control-Allow-Origin', get('document.location.href')(global))(commonHeaders);
  const headers = mergeHeaders({ /* Authorization: authorization */ })(purifiedHeaders);

  return fetch(REQUEST_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: `${flow(replace(/\n+\s+/g, ' '), trim)(query)}`,
    }),
  });
}
