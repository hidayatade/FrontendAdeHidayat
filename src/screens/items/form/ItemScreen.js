import React, {Component} from 'react';
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import {View} from 'react-native';
import {CommonHeader} from '../../../components/CommonHeader';
import styles from './styles';
import {connect} from 'react-redux';
import {save, findById} from '../../../actions/items';
import {showError} from '../../../utils/toast';

class ItemScreen extends Component {
  constructor(props) {
    super(props);

    const {route} = this.props;
    this.state = {
      id: route.params?.id,
      name: '',
    };
  }

  componentDidMount = () => {
    const {id} = this.state;
    if (id) {
      this.props.findById(this.state.id);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const {navigation, data, savedData, savedError, error} = this.props;
    if (prevProps.data !== data) {
      this.setState({...data});
    } else if (prevProps.savedData !== savedData) {
      navigation.goBack();
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (savedError && prevProps.savedError !== savedError) {
      showError(savedError);
    }
  }

  onChange = (name, value) => {
    this.setState({[name]: value});
  };

  onSubmit = () => {
    this.props.save(this.state);
  };

  render() {
    const {navigation, loading, savedError} = this.props;
    const {id, name} = this.state;
    const errorData = savedError?.data || {};
    return (
      <Container>
        <CommonHeader navigation={navigation} title="Items" />

        <Content>
          <Form>
            {id && (
              <Item floatingLabel>
                <Label>ID</Label>
                <Input style={styles.input} disabled value={id.toString()} />
              </Item>
            )}
            <View>
              <Item floatingLabel error={errorData?.name != null}>
                <Label>Name</Label>
                <Input
                  style={styles.input}
                  value={name}
                  onChangeText={value => this.onChange('name', value)}
                />
              </Item>
              {errorData?.name && (
                <Text style={styles.error}>{errorData?.name[0]}</Text>
              )}
            </View>
            <Button
              rounded
              style={styles.button}
              onPress={this.onSubmit}
              disabled={loading}>
              <Text style={styles.buttonText}>S a v e</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  savedData: state.savedItem.data,
  savedError: state.savedItem.error,
  data: state.itemById.data,
  loading: state.itemById.loading || state.savedItem.loading,
  error: state.itemById.error,
});

const mapDispatchToProps = {
  save,
  findById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemScreen);
