import React from 'react';
// import { hot } from "react-hot-loader";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import reset from 'styled-reset';

import AppReactRouter from './AppReactRouter';
import reducers from './store/reducers';
import sagas from './store/sagas';
import initializeStore from './store/initializeStore';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const composeEnhancers = process.env.NODE_ENV === 'development' ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware.apply(null, [sagaMiddleware, thunkMiddleware]);
const store = createStore(reducers, {}, composeEnhancers(middleware));

sagaMiddleware.run(sagas);
initializeStore(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <AppReactRouter />
        </BrowserRouter>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
      </Provider>
    );
  }
}
