/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {primaryColor} from '../common';
import Map from './map';
import Step1 from './campaign/step1';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <Step2/>
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity style={styles.btnItem}>
            <View style={styles.item}>
              <View style={styles.info}>
                <Text>Campain 1</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.group}>
                  <Icon name="users" size={14}/>
                  <Text> 10</Text>
                </View>
              </View>
              <View style={styles.lock}>
                <Icon name="lock" size={30} color="#FF9500"/>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lock: {
    position: 'absolute',
    top:0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(223,170,237,0.5)',
    borderRadius: 3,
  },
  info: {
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  group: {
    flexDirection: 'row',
  },
  wrapBtnCreate: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  btnCreateCampaign: {
    position: 'absolute',
    bottom: 70,
    right: 20,
  },
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
