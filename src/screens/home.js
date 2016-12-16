/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity style={styles.btnItem}>
            <View style={styles.item}>
              <Text>Campain 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem}>
            <View style={styles.item}>
              <Text>Campain 1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 64,
  },
  btnItem: {
    marginBottom: 10,
  },
  item: {
    padding: 15,
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    backgroundColor :'#fff',
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ccc',
    justifyContent: 'center',
  },
});
