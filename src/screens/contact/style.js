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
    height: 350,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    overflow: 'hidden',
  },
  image: {
    height: 350,
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
  card: {
    height: hp('60%'),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 40,
  },
});

export default styles;
