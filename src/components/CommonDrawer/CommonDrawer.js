import React, {Component} from 'react';
import {
  Content,
  ListItem,
  Left,
  Icon,
  Body,
  Container,
  Text,
  Thumbnail,
} from 'native-base';
import styles from './styles';
import {ImageBackground} from 'react-native';

const items = [
  {
    icon: 'home',
    label: 'Home',
    target: 'Home',
  },
  {
    icon: 'contacts',
    label: 'Contact',
    target: 'Items',
  },
];

function DrawerItem({navigation, item}) {
  return (
    <ListItem icon onPress={() => navigation.navigate(item.target)}>
      <Left>
        <Icon name={item.icon} />
      </Left>
      <Body>
        <Text style={styles.menu}> {item.label} </Text>
      </Body>
    </ListItem>
  );
}

class CommonDrawer extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/26/ad/99/26ad992974cac01c564116d2740b9cc7.jpg',
    };
    return (
      <Container style={styles.container}>
        <ImageBackground source={image} style={styles.background}>
          <Content style={styles.content}>
            <ImageBackground
              source={require('../../../assets/img/drawer4.png')}
              style={styles.image}>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    style={styles.imageUser}
                    source={require('../../../assets/img/user.png')}
                  />
                </Left>
              </ListItem>
              <Text style={styles.imageText}>A d m i n</Text>
            </ImageBackground>
            {items.map((item, index) => (
              <DrawerItem key={index} navigation={navigation} item={item} />
            ))}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
export default CommonDrawer;
