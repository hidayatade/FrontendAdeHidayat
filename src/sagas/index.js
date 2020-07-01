import {all, fork} from 'redux-saga/effects';
import {
  watchSaveItem,
  watchDeleteById,
  watchFindById,
  watchFindAllItems,
} from './items';

export default function* rootSaga() {
  yield all([
    fork(watchFindAllItems),
    fork(watchFindById),
    fork(watchSaveItem),
    fork(watchDeleteById),
  ]);
}
