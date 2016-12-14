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
  constructor(props) {
    super(props);
    this.state = {
      item : [],
      item2 : [],
      item3: []
    }
  }

  componentDidMount() {
    this.setState({
      item : cards[0],
      item2 : cards[1],
      item3 : cards[2]
    })
  }

  next() {
    console.log('next called');
    let currentIndex = cards.indexOf(this.state.item);
    let nextIndex = currentIndex + 1;

    this.setState({
      item: cards[nextIndex > cards.length - 1 ? 0 : nextIndex],
      item2: cards[nextIndex > cards.length - 1 ? 1 : nextIndex-1],
      item3: cards[nextIndex > cards.length - 2 ? 2 : nextIndex-2]
    });
  }

  previous() {
    console.log('previous called');
    let currentIndex = cards.indexOf(this.state.item);
    let nextIndex = currentIndex - 1;

    this.setState({
      item: cards[nextIndex < cards.length ? cards.length+1 : nextIndex],
      item2: cards[nextIndex < cards.length ? cards.length+2 : nextIndex+2],
      item3: cards[nextIndex > cards.length + 3 ? 3 : nextIndex+3]
    });
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
