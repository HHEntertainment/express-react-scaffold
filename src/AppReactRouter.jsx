import * as React from 'react';
import { Route } from 'react-router-dom';

import { Main } from './views/Main';

export default class AppReactRouter extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
      </div>
    );
  }
}
