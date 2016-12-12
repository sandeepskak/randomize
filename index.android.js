/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Randomize extends Component {
  render() {
    let pic = {
      uri: "http://www.newton.ac.uk/files/covers/968361.jpg"
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Image source={pic} style={{width: 350, height: 350}}/>
        <View style={styles.viewInstructions}>
          <Blink name="Sandeep" />
          <Blink name="S" />
          <Blink name="Blah" />
        </View>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    setInterval(()=>{
      this.setState({ showText: !this.state.showText});
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.name : '';
    return (
      <Text>{display}</Text>
    )
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: center}}>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewInstructions: {
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Randomize', () => Randomize);
