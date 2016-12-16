import React, { Component } from 'react';
import {View, Text} from 'react-native';

export class Xkcd extends Component {
  componentDidMount() {
    this.random(function(error, response) {
      if (error) {
        console.error(error);
      } else {
        console.log(response);
      }
    });
  }

  render() {
    return(
      <View>
        <Text>
          Hello from Xkcd!
        </Text>
      </View>
    )
  }

  latest(callback) {
    fetch('http://xkcd.com/info.0.json')
      .then((response) => response.json())
      .then((responseJson) => {
        callback(null, responseJson);
      })
      .catch((error) => {
        callback(error, null)
      });
  }

  random(callback) {
    fetch('http://xkcd.com/info.0.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let latestComicNumber = responseJson.num;
        this.getComic(this.getRandomIntWithinRange(1, latestComicNumber), callback);
      })
      .catch((error) => {
        callback(error, null)
      });
  }

  getRandomIntWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getComic(number, callback) {
    fetch('http://xkcd.com/'+ number +'/info.0.json')
      .then((response) => response.json())
      .then((responseJson) => {
        callback(null, responseJson);
      })
      .catch((error) => {
        callback(error, null);
      });
  }
}
