import {ItemScreen, ItemPicker} from '../screens/items';
import {HomeScreen} from '../screens/home';
import {AddScreen} from '../screens/add';
import {CallScreen} from '../screens/call';
import { ContactScreen } from '../screens/contact';

export const stackRoutes = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Add',
    component: AddScreen,
  },
  {
    name: 'ItemDetail',
    component: ItemScreen,
  },
  {
    name: 'ItemPicker',
    component: ItemPicker,
  },
];

export const bottomRoutes = [
  {
    name: 'Call',
    icon: 'phone',
    component: CallScreen,
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
