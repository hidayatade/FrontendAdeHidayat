import React, {Component} from 'react';
import {Container, Content, Text, Item, Icon, Input, Label} from 'native-base';
import {ImageBackground, View} from 'react-native';
import styles from './style';

class AddScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/96/57/38/96573826d6d1346e92463a4cacd058c9.jpg',
    };
    return (
      <Container>
        <Content style={styles.container}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Add Contact</Text>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>First Name</Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Last Name</Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Age</Label>
                    <Input />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Image</Label>
                    <Input />
                  </Item>
                </View>
              </ImageBackground>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddScreen;
