/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  toogle = () => {
      this.setState({isChecked: !this.state.isChecked});
  }

  onchange = () => {
    if(this.props.onchange) {
      this.props.onchange(this.state.isChecked);
    }
  }

  render() {
    const nameIcon =
    return (
      <TouchableHighlight underlayColor={'#ccc'}>

      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
