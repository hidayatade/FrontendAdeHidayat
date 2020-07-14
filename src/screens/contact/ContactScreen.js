import React, {Component} from 'react';
import {Text, ListItem, Left, Body, Right, Thumbnail, Card} from 'native-base';
import {ImageBackground, View, Image, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {findAll} from '../../actions/contact';
import {SwipeListView} from 'react-native-swipe-list-view';
import {concat} from 'react-native-reanimated';

function Contacts({onPress, item}) {
  let photo = item.photo;
  if (photo == 'N/A') {
    photo =
      'https://i.pinimg.com/474x/37/e9/3d/37e93d6c69f3a2390255f260c4b1bdd4.jpg';
  }
  return (
    <ListItem avatar style={styles.list}>
      <Left>
        <Thumbnail
          source={{
            uri: photo,
          }}
        />
      </Left>
      <Body style={styles.listBody}>
        <Text>
          {item.firstName} {item.lastName}
        </Text>
        <Text>{item.age}</Text>
        <Text note>Doing what you like will</Text>
      </Body>
      <Right>
        <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
  );
}

class ContactScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: '',
      params: {
        sort: 'asc',
        page: 0,
        search: '',
      },
    };
  }

  reload({sort = 'asc', page = 0} = {}) {
    this.props.findAll({sort, page});
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps) {
    const {data, error} = this.props;
    console.log('data :', data);
    if (prevProps.data !== data) {
      this.setState({data: data});
    } else if (prevProps.data !== data) {
      this.reload();
    } else if (error && prevProps.error !== error) {
      console.log(error);
    }
  }

  onRefresh = () => {
    const {params} = this.state;
    this.setState(
      {
        data: [],
        params: {...params, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  onAdd = () => {
    this.props.navigation.push('AddScreen');
  };

  onShowForm = contact => {
    this.props.navigation.navigate(
      'AddScreen',
      contact ? {id: concat.id} : null,
    );
  };

  onSearch = () => {
    const {search, params} = this.state;
    this.setState(
      {
        data: [],
        params: {...params, search: search, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  render() {
    const {loading} = this.props;
    const {data} = this.state;
    const image = {
      uri:
        'https://i.pinimg.com/474x/37/e9/3d/37e93d6c69f3a2390255f260c4b1bdd4.jpg',
    };
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3167B8', '#D9E2C4', '#f2fcfe']}
          style={styles.gradient}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <ImageBackground source={image} style={styles.image}>
                {/* <Image
                  style={styles.stretch}
                  source={require('../../../assets/img/user.png')}
                /> */}
                <Text style={styles.text}>Contact</Text>
                <Text style={styles.text2}>My name is bor</Text>
              </ImageBackground>
            </View>
          </View>
          <View>
            <Card style={styles.card}>
              <ScrollView style={styles.scroll}>
                <SwipeListView
                  refreshControl={
                    <RefreshControl
                      refreshing={loading}
                      onRefresh={this.onRefresh}
                    />
                  }
                  data={data.data}
                  renderItem={({item, index}) => (
                    <Contacts
                      onPress={this.onShowForm}
                      item={item}
                      index={index}
                    />
                  )}
                  rightOpenValue={-75}
                  keyExtractor={contact => contact.id.toString()}
                />
              </ScrollView>
            </Card>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.contacts.data,
  loading: state.contacts.loading,
  error: state.contacts.error,
});

const mapDispatchProps = {
  findAll,
};

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(ContactScreen);
