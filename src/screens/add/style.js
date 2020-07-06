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
  image: {
    height: 650,
    width: 412,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: hp('5%'),
    textAlign: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: hp('5%'),
    width: wp('78%'),
    alignSelf: 'center',
  },
  inputText: {
    color: 'white',
  },
  buttonSaveHead: {
    marginTop: hp('-5%'),
    marginLeft: wp('55%'),
  },
  buttonBackHead: {
    marginTop: hp('7%'),
    marginLeft: wp('9%'),
  },
  buttonBack: {
    backgroundColor: 'red',
    width: wp('34%'),
    borderRadius: 20,
  },
  buttonSave: {
    backgroundColor: '#00e5ff',
    width: wp('34%'),
    borderRadius: 20,
  },
  buttonText: {
    marginRight: wp('15%'),
  },
  iconInput: {
    fontSize: 25,
    paddingRight: wp('3%'),
  },
  iconButton: {
    fontSize: 25,
    marginLeft: wp('5%'),
  },
});

export default styles;
