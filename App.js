import { StatusBar } from 'expo-status-bar';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <View style = {styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000'
    },

  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  closeText:{
    color: 'dodgerblue',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10, 
  },

  modalText: {
    color: 'dodgerblue',
    textAlign: 'center',
    marginTop: 10
  },


});
