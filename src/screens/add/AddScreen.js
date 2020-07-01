import React, {Component} from 'react';
import {
  Container,
  Content,
  ListItem,
  Left,
  Thumbnail,
  Item,
  Input,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {ImageBackground, View} from 'react-native';
import styles from './style';

class AddScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/4a/e8/c9/4ae8c9fccd882109292886398e30b1e8.jpg',
    };
    return (
      <Container>
        <Content style={styles.container}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <Card style={styles.card}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail
                      style={styles.imageUser}
                      source={require('../../../assets/img/user.png')}
                    />
                  </Left>
                </ListItem>
                <Item style={styles.input}>
                  <Icon active name="pencil-square" />
                  <Input placeholder="Nama" />
                </Item>
                <Item style={styles.input}>
                  <Icon active name="phone" />
                  <Input placeholder="Telpon" />
                </Item>
                <Item style={styles.input}>
                  <Icon active name="home" />
                  <Input placeholder="Email" />
                </Item>
                <Item style={styles.input}>
                  <Icon active name="home" />
                  <Input placeholder="Alamat" />
                </Item>
                <Item style={styles.input}>
                  <Icon active name="home" />
                  <Input placeholder="Hubungan" />
                </Item>
              </Card>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddScreen;
