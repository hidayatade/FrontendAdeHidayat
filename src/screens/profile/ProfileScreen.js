import React, {Component} from 'react';
import {Text, Card, Body, Button} from 'native-base';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

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
      <View style={styles.container}>
        <LinearGradient
          colors={['#74ebd5', '#ACB6E5', '#43D4FF']}
          style={styles.gradient}>
          <View>
            <Grid>
              <Col>
                <View>
                  <Image
                    style={styles.image}
                    source={require('../../../assets/img/me.jpg')}
                  />
                </View>
              </Col>
              <Col>
                <Text style={styles.textName}>ADE HIDAYAT</Text>
                <Text style={styles.textQuote}>
                  ``Leave thoughts that make you weak, and hold thoughts that
                  give you strength``.
                </Text>
                <Button style={styles.button} rounded light>
                  <Text style={styles.buttonText}>
                    M O D I F E R P R O F I L
                  </Text>
                </Button>
              </Col>
            </Grid>
          </View>
          <View>
            <Card style={styles.card}>
              <Body>
                <Text style={styles.textJob}>Front End Develover</Text>
              </Body>
              <View style={styles.scroll}>
                <ScrollView>
                  <View>
                    <Grid>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/1.jpg')}
                          />
                        </View>
                      </Col>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/2.jpg')}
                          />
                        </View>
                      </Col>
                    </Grid>
                  </View>
                  <View>
                    <Grid>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/3.jpg')}
                          />
                        </View>
                      </Col>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/4.jpg')}
                          />
                        </View>
                      </Col>
                    </Grid>
                  </View>
                  <View>
                    <Grid>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/5.jpg')}
                          />
                        </View>
                      </Col>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/6.jpg')}
                          />
                        </View>
                      </Col>
                    </Grid>
                  </View>
                  <View>
                    <Grid>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/7.jpg')}
                          />
                        </View>
                      </Col>
                      <Col>
                        <View>
                          <Image
                            style={styles.imageJob}
                            source={require('../../../assets/img/8.jpg')}
                          />
                        </View>
                      </Col>
                    </Grid>
                  </View>
                </ScrollView>
              </View>
            </Card>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default ProfileScreen;
