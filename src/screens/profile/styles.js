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
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginTop: hp('10%'),
    marginLeft: hp('5%'),
  },
  card: {
    marginTop: hp('29%'),
    height: hp('65%'),
    borderTopRightRadius: 150,
  },
  textName: {
    marginTop: hp('11%'),
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginLeft: wp('-8%'),
  },
  textQuote: {
    marginTop: hp('1%'),
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginLeft: wp('-12%'),
  },
  button: {
    backgroundColor: '#37474f',
    height: hp('3%'),
    width: wp('50%'),
    marginTop: hp('1%'),
    marginLeft: wp('-5%'),
    opacity: 0.5,
  },
  buttonText: {
    color: '#22c1c3',
  },
  textJob: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: hp('2%'),
    color: '#8d6e63',
    opacity: 0.6,
  },
  imageJob: {
    width: 170,
    height: 110,
    borderRadius: 20,
    marginLeft: hp('2%'),
    marginTop: hp('5%'),
    marginBottom: hp('1%'),
  },
  scroll: {
    marginTop: hp('10%'),
  },
});

export default styles;
