import React, { Component } from 'react';
import { Container,
  Icon,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text
} from 'native-base';

import {
  Image
} from 'react-native';

import FitImage from 'react-native-fit-image';

const cards = [
    {
      name: 'One',
      image: {
        uri: "http://www.newton.ac.uk/files/covers/968361.jpg",
      },
      source: 'randomCover'
    },
    {
      name: 'Two',
      image: {
        uri: "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
      },
      source: 'google_images'
    },
    {
      name: 'Three',
      image: {
        uri: "https://ckinknoazoro.files.wordpress.com/2011/06/random.jpg",
      },
      source: 'random'
    }
];

export class RandomSwiper extends Component {

  next() {
    console.log('next called');
  }

  previous() {
    console.log('previous called');
  }

  componentWillMount() {
    fetch('http://192.168.0.104:8080/')
       .then((data) => data.json())
       .then((jsonData) => {
          cards.push({
            name: jsonData.safe_title,
            image: {
              uri: jsonData.img,
            },
            source: 'Xkcd'
          })
        })
       .done();
  }

  render() {
    return (
      <DeckSwiper
        onSwipeLeft={()=>this.previous()}
        onSwipeRight={()=>this.next()}
        dataSource={cards}
        renderItem={(item) =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Thumbnail source={item.image} />
              <Text>{item.name}</Text>
              <Text note>{item.name}</Text>
            </CardItem>
            <CardItem>
              <FitImage
                resizeMode="contain"
                source={item.image}
              />
            </CardItem>
            <CardItem>
              <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.source}</Text>
            </CardItem>
          </Card>
        }>
      </DeckSwiper>
    );
  }
}
