import {all, fork} from 'redux-saga/effects';
import {
  watchSaveContact,
  watchDeleteById,
  watchFindById,
  watchFindAllContacts,
} from './contact';

export default function* rootSaga() {
  yield all([
    fork(watchFindAllContacts),
    fork(watchFindById),
    fork(watchSaveContact),
    fork(watchDeleteById),
  ]);
}
