import {combineReducers} from 'redux';
import {
  savedContact,
  deleteContactById,
  contactById,
  contacts,
} from './contact';
export default combineReducers({
  savedContact,
  contactById,
  contacts,
  deleteContactById,
});
