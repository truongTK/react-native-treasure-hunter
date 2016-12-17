/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import Modal from './modal';

var id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Guide = () => (
  <View style={styles.guide}>
    <Text style={{textAlign: 'center'}}>Click on the map to create questions</Text>
  </View>
)

export default class Step2 extends Component {
constructor(props) {
  super(props);
  this.state = {
    markers: [],
    visible: false,
  };
}

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
      visible: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          // initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.key}
            coordinate={marker.coordinate}
            pinColor={marker.color}
          />
        ))}
        </MapView>
        <Modal visible={this.state.visible}/>
        <Guide/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtFinish: {
    fontSize: 16,
    textAlign: 'center',
  },
  guide: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
  },
});
