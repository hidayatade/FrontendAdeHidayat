import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  view: {
    flex: 1,
  },
  view2: {
    width: 420,
    height: hp('30%'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 300,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    overflow: 'hidden',
  },
  image: {
    height: hp('40%'),
    width: 412,
  },
  user: {
    marginTop: hp('-8%'),
  },
  userImage: {
    width: wp('32%'),
    height: hp('15%'),
    alignSelf: 'center',
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
