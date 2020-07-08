import React, {Component} from 'react';
import {Text, Item, Icon, Input, Label, Button} from 'native-base';
import {ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

class AddScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/474x/af/33/b7/af33b7b7ec7c20e49a2809f51351e0cf.jpg',
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
                    <FontAwesome
                      style={styles.iconInput}
                      active
                      name="user-alt"
                    />
                    <Label style={styles.inputText}>First Name : </Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <FontAwesome
                      style={styles.iconInput}
                      active
                      name="portrait"
                    />
                    <Label style={styles.inputText}>Last Name : </Label>
                    <Input style={styles.inputText} />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <FontAwesome
                      style={styles.iconInput}
                      active
                      name="accusoft"
                    />
                    <Label style={styles.inputText}>Age : </Label>
                    <Input />
                  </Item>
                </View>
                <View style={styles.input}>
                  <Item>
                    <FontAwesome
                      style={styles.iconInput}
                      active
                      name="camera"
                    />
                    <Label style={styles.inputText}>Image : </Label>
                    <Input />
                  </Item>
                </View>
                <View style={styles.buttonBackHead}>
                  <Button
                    iconLeft
                    style={styles.buttonBack}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <FontAwesome style={styles.iconButton} name="arrow-left" />
                    <Text style={styles.buttonText}>Back</Text>
                  </Button>
                </View>
                <View style={styles.buttonSaveHead}>
                  <Button iconLeft style={styles.buttonSave}>
                    <FontAwesome style={styles.iconButton} name="check" />
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
