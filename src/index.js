/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  NavBar
} from './components';

import Navigator from './navigator';

export default class MyComponent extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
