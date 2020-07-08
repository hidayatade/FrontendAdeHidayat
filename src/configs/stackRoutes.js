import {HomeScreen} from '../screens/home';
import {AddScreen} from '../screens/add';
import {ProfileScreen} from '../screens/profile';
import {ContactScreen} from '../screens/contact';

export const stackRoutes = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Add',
    component: AddScreen,
  },
];

export const bottomRoutes = [
  {
    name: 'Profile',
    icon: 'user-alt',
    component: ProfileScreen,
  },
  {
    name: 'Contact',
    icon: 'users',
    component: ContactScreen,
  },
  {
    name: 'Add',
    icon: 'user-plus',
    component: AddScreen,
  },
];

export default stackRoutes;
