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
  cardHead: {
    marginTop: hp('20%'),
  },
  card: {
    height: hp('62%'),
    width: wp('92%'),
    alignSelf: 'center',
    borderRadius: 25,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginTop: hp('-8%'),
    alignSelf: 'center',
  },
  contact: {
    alignSelf: 'center',
  },
  textContact: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d4c41',
    opacity: 0.5,
    marginTop: hp('1%'),
  },
  line: {
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
    marginTop: hp('1%'),
    opacity: 0.5,
  },
  inputHeadOne: {
    marginTop: hp('3%'),
  },
  inputHead: {
    marginTop: hp('3%'),
  },
  input: {
    width: wp('85%'),
    alignSelf: 'center',
  },
  icon: {
    fontSize: 20,
  },
  textInput: {
    marginLeft: wp('2%'),
    opacity: 0.8,
    color: '#009688',
  },
  buttonSave: {
    marginTop: hp('7%'),
    width: wp('60%'),
    marginLeft: wp('-3%'),
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonTextSave: {
    justifyContent: 'center',
    marginLeft: wp('18%'),
    fontWeight: 'bold',
  },
  buttonBack: {
    marginTop: hp('7%'),
    width: wp('20%'),
    marginLeft: wp('5%'),
    borderRadius: 10,
  },
  iconBack: {
    fontSize: 25,
    marginLeft: wp('3%'),
    color: 'white',
  },
});

export default styles;
