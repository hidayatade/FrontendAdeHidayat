import React, {Component} from 'react';
import {Body, Button, Header, Icon, Left, Title} from 'native-base';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';
import styles from './styles';

class CommonHeader extends Component {
  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };

  onBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {navigation, hideLeftButton, title} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/5d/b7/11/5db711f7d577d3961b1a41d3cc44fab3.jpg',
    };
    return (
      <Header style={styles.header}>
        {!hideLeftButton && (
          <Left>
            {typeof navigation.openDrawer === 'function' ? (
              <Button onPress={this.onMenuPress}>
                <Icon name="menu" />
              </Button>
            ) : (
              <Button onPress={this.onBackPress}>
                <Icon name="ios-arrow-back" />
              </Button>
            )}
          </Left>
        )}
        <Body>
          <ImageBackground source={image} style={styles.image}>
            <Title style={styles.textHeader}>{title}</Title>
          </ImageBackground>
        </Body>
      </Header>
    );
  }
}

CommonHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  hideLeftButton: PropTypes.bool,
  title: PropTypes.string,
};
export default CommonHeader;
