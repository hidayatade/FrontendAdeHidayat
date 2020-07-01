import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import {ImageBackground, View} from 'react-native';
import styles from './styles';

class CallScreen extends Component {
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
                <Text style={styles.text}>Call</Text>
                <Text style={styles.text2}>My name is bor</Text>
              </ImageBackground>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CallScreen;
