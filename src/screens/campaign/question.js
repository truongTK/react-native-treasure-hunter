/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder={'Question'}
            style={styles.input}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
