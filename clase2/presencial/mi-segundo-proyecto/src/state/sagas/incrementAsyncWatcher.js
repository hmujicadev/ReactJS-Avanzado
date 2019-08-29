import {put ,takeEvery} from 'redux-saga/effects'

import {increment} from '../actions'

import {INCREMENT_ASYNC} from './types'



//Worker
export function* incrementAsync(){
    yield put(increment())
}


//Watcher
export function* incrementAsyncWatcher(){
    yield takeEvery(INCREMENT_ASYNC,incrementAsync )
}