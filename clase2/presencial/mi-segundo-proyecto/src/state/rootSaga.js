import {all} from 'redux-saga/effects'
import { incrementAsyncWatcher } from './sagas/incrementAsyncWatcher';
import { decrementAsyncWatcher } from './sagas/decrementAsyncWatcher';



export function * rootSaga(){
    //watcher
    yield all([incrementAsyncWatcher(),decrementAsyncWatcher()])
}