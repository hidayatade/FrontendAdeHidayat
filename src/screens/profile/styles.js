import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    marginTop: hp('13%'),
    marginLeft: hp('3%'),
  },
  card: {
    height: hp('62%'),
    marginTop: hp('5%'),
    borderTopRightRadius: 150,
  },
});

export default styles;
