import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Meteor from 'react-native-meteor';

import createStore from './store';
import config from './config';
import Navigator from './navigator';

Meteor.connect(config.ddpConfig.url);
const store = createStore();

export default class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
