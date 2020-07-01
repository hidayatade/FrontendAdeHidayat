## Create drawer navigation
  Pada langkah pertama ini kita tidak akan membuat project baru melainkan menggunakan project yang sudah ada sebelumnya yaitu project “mobileClient”.

  Pertama kita buat folder baru di dalam folder components dan kita beri nama dengan commonDrawer. Pada folder commonDrawer kita akan buat file dengan nama commonDrawer.js, index.js dan styles.js.

  Pertama kita buat file commonDrawer.js berikut merupakan isi file dari commonDrawer.js.

  ```java

function DrawerItem({navigation, item}) {
  return (
    <ListItem icon onPress={() => navigation.navigate(item.target)}>
      <Left>
        <Icon name={item.icon} />
      </Left>
      <Body>
        <Text> {item.label} </Text>
      </Body>
    </ListItem>
  );
}

class CommonDrawer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../../assets/img/material1.png')}
            style={styles.image}>
            <Text>Inside</Text>
          </ImageBackground>
          {items.map((item, index) => (
            <DrawerItem key={index} navigation={navigation} item={item} />
          ))}
        </Content>
      </Container>
    );
  }
}
export default CommonDrawer;

  ```

Setelah selesai membuat file commonDrawer.js lalu kita selanjutnya akan membuat file index.js berikut merupan isi file dari index.js:

```java

export {default as CommonDrawer} from './CommonDrawer';

```

Setelah selesai selanjutnya kita membuat file styles.js berikut merupakan isi file dari styles.js:

```java

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 160,
    justifyContent: 'center',
  },
});

export default styles;

```
Setelah selesai membuat file commonDrawer.js, index.js dan styles.js maka langkah selanjutnya kita akan membuat folder baru di dalam folder src dengan nama main, pada folder main kita akan membuat file dengan nama MainScreen.js dan index.js.
Pertama yang akan kita buat terlebih dahulu adalah file MainScreen.js. Berikut merupakan isi dari file MainScreen.js:

```java

  const Drawer = createDrawerNavigator();

  function DrawerContent(props) {
  return <CommonDrawer {...props} />;
}

class MainScreen extends Component {
  render() {
    return (
      <Drawer.Navigator
        backBehavior="initialRoute"
        drawerContent={DrawerContent}>
        {drawerRoutes.map((route, index) => (
          <Drawer.Screen
            key={index}
            name={route.name}
            component={route.component}
          />
        ))}
      </Drawer.Navigator>
    );
  }
}

```

Selanjutnya kita akan membuat file index.js. Berikut merupakan code dari index.js:

```java

export {default as MainScreen} from './MainScreen';


```

### Background Image
Selanjut nya kita akan membuat background image pada Drawer navigator. Untuk dapat menambahkan Background Image kita perlu menambahkan code berikut pada bagian file commonDrawer.js:

``` java
<ImageBackground
    source={require('../../../assets/img/material1.png')}
    style={styles.image}>
    <Text>Inside</Text>
</ImageBackground>

```

Berikut merupakan code utuh pada commonDrawer yang telah di tuliskan background image.

```java

class CommonDrawer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../../assets/img/material1.png')}
            style={styles.image}>
            <Text>Inside</Text>
          </ImageBackground>
          {items.map((item, index) => (
            <DrawerItem key={index} navigation={navigation} item={item} />
          ))}
        </Content>
      </Container>
    );
  }
}

```

### Membuat list

Selanjutnya kita akan membuat list item, pertama kita masuk ke folder items lalu masuk ke folder list, pada folder list kita akan menuliskan code pada file Items.js dan styles.js berikut merupakan code dari folder Items.js:

```java

  const data = [
  {
    id: 1,
    name: 'Kopi Hitam',
    thubnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi5HG-Gzafrwu6vuXU7ydyJ9Vhzpn2B4xW-eLNQRsVHHui5sM0&usqp=CAU',
  },
  {
    id: 2,
    name: 'Bolu',
    thubnail:
      'https://1.bp.blogspot.com/-RXGIn3ddUR8/UerN_MUsHyI/AAAAAAAAAMw/X0xuSMPZHEQ/s1600/Chocolate+Melt+Cake+(Cake+Cokelat+Leleh)+.jpg',
  },
];

function Item({navigation, item}) {
  return (
    <ListItem onPress={() => navigation.navigate('ItemDetail', {id: item.id})}>
      <Left>
        <Thumbnail square source={{uri: item.thubnail}} />
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right>
        <Icon name="ios-arrow-forward" />
      </Right>
    </ListItem>
  );
}

class Items extends Component {
  onRefresh = () => {
    console.log('will refresh?');
  };

  onAdd = () => {
    this.props.navigation.navigate('ItemDetail');
  };

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Items" />
        <View style={styles.content}>
          <List
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={this.onRefresh} />
            }
            dataArray={data}
            renderRow={item => <Item navigation={navigation} item={item} />}
            keyExtractor={item => item.id.toString()}
          />
          <Fab onPress={this.onAdd}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default Items;

```
Setelah selesai membuat file Items.js maka kita akan membuat file styles.js untuk mengatur tampilan pada layar utama. Berikut merupakan code dari styles.js:

```java

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default styles;


```

### Membuat form pada items

Selanjutnya kita akan membuat form items, pertama kita masuk ke folder items lalu masuk ke folder form, pada folder form kita akan menuliskan code pada file ItemScreen.js dan file styles.js berikut merupakan code dari folder ItemScreen.js:

```java

class ItemScreen extends Component {
  constructor(props) {
    super(props);

    const {route} = this.props;
    this.state = {
      id: route.params?.id,
    };
  }

  onChange = (name, value) => {
    this.setState({[name]: value});
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const {navigation} = this.props;
    const {id, name} = this.state;
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
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                style={styles.input}
                value={name}
                onChangeText={value => this.onChange('name', value)}
              />
            </Item>
            <Button style={styles.button} full onPress={this.onSubmit}>
              <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default ItemScreen;

```
setelah selesai menuliskan code ItemScreen.js lalu kita akan menuliskan file styles.js untuk mengatur tampilan yang kita inginkan berikut merupakan code dari file styles.js:

```java

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    padding: 5,
  },
  input: {
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
  },
});

export default styles;

```
 