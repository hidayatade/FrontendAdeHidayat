import {combineReducers} from 'redux';
import {savedItem, deleteItemById, itemById, items} from './items';
export default combineReducers({
  savedItem,
  itemById,
  items,
  deleteItemById,
});
