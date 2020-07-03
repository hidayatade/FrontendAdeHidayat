import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail} from 'native-base';
import {ImageBackground, View} from 'react-native';
import styles from './styles';

class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/36/04/37/3604370d83e30d9e3a5e3324943ed4e5.jpg',
    };
    const uri2 =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwzxa_Z-H0BUzLtKrkv8OdokUP0mo3_8iL9w&usqp=CAU';
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
            <View style={styles.user}>
              <Thumbnail style={styles.userImage} large source={{uri: uri2}} />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
