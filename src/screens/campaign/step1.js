/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';

export default class Step1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapInput}>
          <TextInput
            placeholder={'Campaign name'}
            style={styles.input}/>
        </View>
        <View style={styles.wrapInput}>
          <TextInput
            multiline={true}
            placeholder={'Description'}
            style={styles.input2}/>
        </View>
        <View style={styles.wrapInput}>
          <TextInput
            multiline={true}
            placeholder={'Gift'}
            style={styles.input2}/>
        </View>
        <View style={[styles.groupSwitch, {marginTop: 10}]}>
          <Text>Public</Text>
          <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={true} />
        </View>
        <View style={styles.wrapInput}>
          <TextInput
            multiline={true}
            placeholder={'Code'}
            style={styles.input}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input2: {
    height: 80,
  },
  wrapInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
  },
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 64,
  },
});
