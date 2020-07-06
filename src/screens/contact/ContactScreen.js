import React, {Component} from 'react';
import {Text, ListItem, Left, Body, Right, Thumbnail, Card} from 'native-base';
import {ImageBackground, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

class ContactScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/37/e9/3d/37e93d6c69f3a2390255f260c4b1bdd4.jpg',
    };
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3167B8', '#D9E2C4', '#f2fcfe']}
          style={styles.gradient}>
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
          <View>
            <Card style={styles.card}>
              <ScrollView style={styles.scroll}>
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
            </Card>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default ContactScreen;
