import React, {Component} from 'react';
import {Text, Item, Icon, Input, Label, Button} from 'native-base';
import {ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class AddScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/04/50/d1/0450d1ddf24d030ad0f6905b213ed150.jpg',
    };
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4C5AB6', '#44444C', '#f2fcfe']}
          style={styles.gradient}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Add Contact</Text>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>First Name : </Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Last Name : </Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Age : </Label>
                    <Input />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <Icon active name="home" />
                    <Label style={styles.inputText}>Image : </Label>
                    <Input />
                  </Item>
                </View>
                <View style={styles.buttonBackHead}>
                  <Button iconLeft style={styles.buttonBack}>
                    <Icon name="home" />
                    <Text style={styles.buttonText}>Back</Text>
                  </Button>
                </View>
                <View style={styles.buttonSaveHead}>
                  <Button iconLeft style={styles.buttonSave}>
                    <Icon name="home" />
                    <Text style={styles.buttonText}>Save</Text>
                  </Button>
                </View>
              </ImageBackground>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default AddScreen;
