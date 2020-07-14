import React, {Component} from 'react';
import {
  Text,
  Item,
  Icon,
  Input,
  Label,
  Button,
  Card,
  Grid,
  Col,
} from 'native-base';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ImagePicker} from 'react-native-image-picker';
import styles from './style';

class AddScreen extends Component {
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
    });
  };

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
            <View style={styles.cardHead}>
              <Card style={styles.card}>
                <View>
                  <Image
                    style={styles.image}
                    source={require('../../../assets/img/me.jpg')}
                  />
                  <View style={styles.contact}>
                    <Text style={styles.textContact}>Add new contact</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.inputHeadOne}>
                    <View style={styles.inputHead}>
                      <Item style={styles.input}>
                        <FontAwesome
                          style={styles.icon}
                          active
                          name="user-plus"
                        />
                        <Input
                          style={styles.textInput}
                          placeholder="First name"
                        />
                      </Item>
                    </View>
                    <View style={styles.inputHead}>
                      <Item style={styles.input}>
                        <FontAwesome
                          style={styles.icon}
                          active
                          name="user-plus"
                        />
                        <Input
                          style={styles.textInput}
                          placeholder="Last name"
                        />
                      </Item>
                    </View>
                    <View style={styles.inputHead}>
                      <Item style={styles.input}>
                        <FontAwesome
                          style={styles.icon}
                          active
                          name="algolia"
                        />
                        <Input style={styles.textInput} placeholder="Age" />
                      </Item>
                    </View>
                  </View>
                </View>
                <View>
                  <Grid>
                    <Col size={30}>
                      <View>
                        <Button
                          iconLeft
                          light
                          style={styles.buttonBack}
                          onPress={() =>
                            this.props.navigation.navigate('Profile')
                          }>
                          <Text style={styles.iconBack}>
                            <FontAwesome
                              style={styles.iconBack}
                              name="arrow-left"
                            />
                          </Text>
                        </Button>
                      </View>
                    </Col>
                    <Col size={70}>
                      <View>
                        <Button primary style={styles.buttonSave}>
                          <Text style={styles.buttonTextSave}>S A V E</Text>
                        </Button>
                      </View>
                    </Col>
                  </Grid>
                </View>
              </Card>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default AddScreen;
