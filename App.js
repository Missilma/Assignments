import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './Component/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Component/Settings';
import { useState } from 'react';


export default class App extends React.Component {

state = {
    value: 0,
  }


  increaseValueHandler = () => {
    this.setState({
      value: this.state.value + 1,
    })
    console.log("value: " + (this.state.value + 1))
  };

  decreaseValueHandler = () => {
    this.setState({
      value: this.state.value - 1,
    })
    console.log("value: " + (this.state.value - 1))
  };

  reloadValueHandler = () => {
    this.setState({
      value: this.state.value * 0,
    })
  }

  render() {
    const { value } = this.state
    return (
        <View style={styles.container}>
        <View style={styles.icon}>
          <AntDesign
            name="infocirlce"
            size={24}
            color="black"
            style={{ margin: 10 }}
          />
          <Ionicons
            name="settings-sharp"
            size={24}
            color="black"
            style={{ margin: 10 }}
            
          />
           
          <Ionicons
            name="reload-sharp"
            size={24} color="black"
            style={{ margin: 10 }}
            onPress={this.reloadValueHandler}
          />
        </View>
        <Text style={styles.count}>{value}</Text>
        <View style={styles.limitComponant}>
          <Text>-12</Text>
          <Text>{"Limit Reached"}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={this.decreaseValueHandler}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={this.increaseValueHandler}>+</PrimaryButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 100,
    marginBottom: 20
  },
  limitComponant: {
    fontSize: 12,
    fontColor: 'gray',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25
  },
  icon: {
    flexDirection: 'row'
  }

});