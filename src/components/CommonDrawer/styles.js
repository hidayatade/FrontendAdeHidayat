import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 740,
  },
  imageUser: {
    marginLeft: 100,
  },
  imageText: {
    marginLeft: 102,
    color: 'white',
    textShadowRadius: 40,
    fontSize: 19,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  menu: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
