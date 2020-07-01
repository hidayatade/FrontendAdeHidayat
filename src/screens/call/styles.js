import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2ebf2',
  },
  view: {
    flex: 1,
  },
  view2: {
    width: 420,
    height: 650,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    overflow: 'hidden',
  },
  image: {
    height: 650,
    width: 412,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: hp('20'),
    textAlign: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  footer: {
    borderRadius: 25,
    backgroundColor: 'pink',
    marginTop: hp('-12%'),
    height: hp('20%'),
  },
});

export default styles;
