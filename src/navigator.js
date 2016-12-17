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
import Step1 from './screens/campaign/step1';
import Step2 from './screens/campaign/step2';

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
            rightButtonTitle: 'Create',
            onRightButtonPress: () => this.rootNavigator.push({
              component: Step1,
              title: 'Create Campaign',
              rightButtonTitle: 'Next',
              onRightButtonPress: () => this.rootNavigator.push({
                component: Step2,
                title: 'Map',
                rightButtonTitle: 'Next',
              })
            }),
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
