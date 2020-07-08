import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
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
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: 'center',
  },
  tabBarLabelActive: {
    color: 'pink',
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#616161',
    fontSize: 18,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#E233DB',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-regular',
  },
  activeIcon: {
    color: '#00e5ff',
    fontSize: 25,
    opacity: 0.4,
  },
  activeButtonText: {
    color: '#9000D3',
  },
});

export default styles;
