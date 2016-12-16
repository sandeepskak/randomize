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

const cards = [
    {
      name: 'One',
      image: {
        uri: "http://www.newton.ac.uk/files/covers/968361.jpg",
      },
    },
    {
      name: 'Two',
      image: {
        uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSs1wLnrPyLIQm5rs6rK5bJ-0Dpox2tVXJo3RH032z2Edz_VSb6lA",
      }
    },
    {
      name: 'Three',
      image: {
        uri: "https://ckinknoazoro.files.wordpress.com/2011/06/random.jpg",
      }
    }
];

export class RandomSwiper extends Component {

  next() {
    console.log('next called');
  }

  previous() {
    console.log('previous called');
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
              <Text>Instrumental Songs</Text>
              <Text note>Guitar</Text>
            </CardItem>
            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={item.image} />
            </CardItem>
            <CardItem>
              <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        }>
      </DeckSwiper>
    );
  }
}
