import React, {Component} from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}