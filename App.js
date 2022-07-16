import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default class App extends React.Component {
  state = {
    value: 0,
    
  }

  increaseValue = () => {
    this.setState({
      value: this.state.value + 1,
      tatal_taps: this.state.total_taps + 1
    })
    console.log("value: " + (this.state.value + 1))
  };

  decreaseValue = () => {
    this.setState({
      value: this.state.value - 1,
      tatal_taps: this.state.total_taps + 1
    })
    console.log("value: " + (this.state.value - 1))
  };

  render() {
    const {value} = this.state
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 60, marginBottom: -20 }}>{value}</Text>
        <Text style={{ fontSize: 12, padding: 20, color: 'grey' }}>-12</Text>
        <Text style={{ fontSize: 12, padding: 20, color: 'grey' }}>{"Limit Reached"}</Text>
        <StatusBar style='auto'/>
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={this.decreaseValue} title="Decrement" />
          <Text>   </Text>
          <Button onPress={this.increaseValue} title="Increment" />
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
});
