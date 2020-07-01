import React, {Component} from 'react';
import {RefreshControl, Alert} from 'react-native';
import {
  Container,
  Text,
  ListItem,
  Body,
  Icon,
  View,
  Fab,
  Button,
  Item,
  Input,
} from 'native-base';
import {CommonHeader} from '../../../components/CommonHeader';
import styles from './style';
import {connect} from 'react-redux';
import {findAll, deleteById} from '../../../actions/items';
import showError from '../../../utils/toast';
import {SwipeListView} from 'react-native-swipe-list-view';

function RowItem({onPress, item}) {
  return (
    <ListItem style={styles.item} onPress={() => onPress(item)}>
      <Body>
        <Text>{item.name}</Text>
      </Body>
    </ListItem>
  );
}

class ItemPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: 0,
      search: '',
      params: {
        search: '',
        sort: 'asc',
        page: 0,
      },
    };
  }

  componentDidMount = () => {
    this.reload(this.state.params);
  };

  componentDidUpdate(prevProps) {
    const {deletedData, deletedError, savedData, data, error} = this.props;
    console.log('data', data);
    if (prevProps.data !== data) {
      this.setState({
        data: [...this.state.data, ...data.list],
        total: data.total,
        search: this.state.params.search,
        params: {
          ...this.state.params,
          page: data.page,
        },
      });
    } else if (
      prevProps.deletedData !== deletedData ||
      prevProps.savedData !== savedData
    ) {
      this.onRefresh();
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (deletedError && prevProps.deletedError !== deletedError) {
      showError(deletedError);
    }
  }

  reload({search, sort = 'asc', page = 0} = {}) {
    this.props.findAll({search: {name: search}, sort, page});
  }

  onRefresh = () => {
    const {params} = this.state;
    this.setState(
      {
        data: [],
        total: 0,
        params: {...params, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  onAdd = () => {
    this.props.navigation.navigate('ItemDetail');
  };

  onShowForm = unit => {
    this.props.route.params.onGoBack(unit);
    this.props.navigation.goBack();
  };

  onSearch = () => {
    const {search, params} = this.state;
    this.setState(
      {
        data: [],
        total: 0,
        params: {...params, search: search, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  onEndReadChed = () => {
    const {data, total, params} = this.state;
    if (data.length < total) {
      this.reload({
        ...params,
        page: params.page + 1,
      });
    }
  };

  render() {
    const {navigation, loading} = this.props;
    const {data, search} = this.state;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Items" />
        <View style={styles.content}>
          <Item>
            <Input
              placeholder="Search"
              value={search}
              onChangeText={search => this.setState({search})}
            />
            <Button transparent onPress={this.onSearch}>
              <Icon name="search" />
            </Button>
          </Item>
          <SwipeListView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
            }
            data={data}
            renderItem={({item}) => (
              <RowItem onPress={this.onShowForm} item={item} />
            )}
            renderHiddenItem={data => (
              <View style={styles.hiddenItem}>
                <Button danger onPress={() => this.onDelete(data.item)}>
                  <Icon name="md-trash" />
                </Button>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            keyExtractor={item => item.id.toString()}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
          />
          <Fab onPress={this.onShowForm}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  deletedData: state.deleteItemById.data,
  deletedError: state.deleteItemById.error,
  savedData: state.savedItem.data,
  data: state.items.data,
  loading: state.items.loading || state.deleteItemById.loading,
  error: state.items.error,
});

const mapDispatchToProps = {
  findAll,
  deleteById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemPicker);
