/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image
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

export default class Randomize extends Component {

  render() {
    return (
        <Container>
          <View>
            <RandomSwiper></RandomSwiper>
            <Xkcd></Xkcd>
          </View>
        </Container>
    );
  }
}

AppRegistry.registerComponent('Randomize', () => Randomize);
