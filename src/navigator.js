/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import {
    Home,
    Login,
  } from './screens';

export default class Navigator extends Component {

  pushScence = (component, title = '', payload = {}) => {
    this.rootNavigator.push({
      component,
      title,
      payload,
    });
  }

  render() {
    const isLogged = true;
    if(!isLogged) {
      return <Login/>
    }
    return (
      <View style={styles.container}>
        <NavigatorIOS
          ref={(rootNavigator) => this.rootNavigator = rootNavigator}
          style={{flex: 1}}
          // renderScene={this._renderScene.bind(this)}
          // configureScene = {this._configureScene}
          // navigationBarHidden = {true}
          initialRoute={{
            component: Home,
            title: 'Home',
            // navigationBarHidden: true,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
