import {put ,takeEvery} from 'redux-saga/effects'

import {decrement} from '../actions'

import {DECREMENT_ASYNC} from './types'



//Worker
export function* decrementAsync(){
    yield put(decrement())
}


//Watcher
export function* decrementAsyncWatcher(){
    yield takeEvery(DECREMENT_ASYNC ,decrementAsync )
}