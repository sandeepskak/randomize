/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';
import { Container,
  Icon,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text
} from 'native-base';
import { RandomSwiper } from './app/components/RandomSwiper';
import { Xkcd } from './app/services/Xkcd';
import { WelcomeView } from './app/views/WelcomeView'
import { ProfileView } from './app/views/ProfileView'

export default class Randomize extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ name: "Welcome" }}
        renderScene={ this.renderScene }
        style={styles.navigator}
        navigationBar={
         <Navigator.NavigationBar
           style={ styles.nav }
           routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }

  renderScene(route, navigator) {
    if (route.name == "Welcome") {
      return <WelcomeView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "Profile") {
      return <ProfileView navigator={navigator} {...route.passProps} />
    }
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    return null
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>Auth0 Sample</Text>
  }
};

const styles = StyleSheet.create({
  title: {
    marginTop:4,
    fontSize:16
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  }
});

AppRegistry.registerComponent('Randomize', () => Randomize);
