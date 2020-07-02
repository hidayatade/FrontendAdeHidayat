import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';
import {ImageBackground, View, Image} from 'react-native';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

class ContactScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/d6/31/df/d631df9152c0f22205791747fd284aad.jpg',
    };
    return (
      <Container>
        <Content style={styles.container}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <ImageBackground source={image} style={styles.image}>
                {/* <Image
                  style={styles.stretch}
                  source={require('../../../assets/img/user.png')}
                /> */}
                <Text style={styles.text}>Contact</Text>
                <Text style={styles.text2}>My name is bor</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.card}>
            <ScrollView>
              <ListItem avatar style={styles.list}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>
                    Doing what you like will always keep you happy . .
                  </Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ContactScreen;
