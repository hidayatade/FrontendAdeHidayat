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
    height: 310,
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
    height: hp('55%'),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: hp('45%'),
    backgroundColor: 'white',
  },
  list: {
    marginBottom: hp('-2%'),
    marginTop: hp('1%'),
  },
  listBody: {
    paddingBottom: hp('2%'),
  },
  scroll: {
    marginTop: hp('1%'),
    marginBottom: hp('6%'),
  },
});

export default styles;
