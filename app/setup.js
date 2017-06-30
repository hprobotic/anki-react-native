import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import AnkiApp from './AnkiApp';

function setup() {
  return class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
      console.log(this.state);
    }
    render() {
      console.log('Go here');
      if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <AnkiApp/>
        </Provider>
      );
    }
  };
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;