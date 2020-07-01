import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2ebf2',
  },
  card: {
    height: hp('70%'),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 90,
  },
  imageUser: {
    marginLeft: wp('36%'),
    marginTop: hp('-6%'),
    fontSize: 40,
    height: 80,
    width: 80,
  },
  input: {
    width: wp('80%'),
    marginLeft: wp('10'),
    marginTop: hp('5%'),
  },
});

export default styles;
