import React, { Component } from 'react';
import { Modal, Text,TextInput, TouchableHighlight,TouchableOpacity, View, StyleSheet } from 'react-native';

export default class ModalExample extends Component {

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.btn}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <View style={styles.wrapInput}>
                <TextInput
                  multiline={true}
                  placeholder={'Question'}
                  style={styles.input}/>
              </View>
              <View style={styles.wrapInput}>
                <TextInput
                  multiline={true}
                  placeholder={'Answer'}
                  style={styles.input}/>
              </View>
            </View>
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 80,
  },
  body: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 10,
  },
  btn: {
    padding: 10,
    flex: 1,
  },
  btn2: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-end'
  },
  header: {
    // height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  content: {
    // flexBasis: 300,
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    // justifyContent: 'flex-end',
  },
})
