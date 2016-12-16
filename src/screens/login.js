/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Home from './home';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnLogin}
          onPress={()=> {}}>
          <View style={styles.wrapButton}>
            <Text style={styles.txtLogin}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: 'rgb(90,200,250)',
  },
  wrapButton: {
    borderRadius: 4,
    padding: 10,
  },
  txtLogin: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
