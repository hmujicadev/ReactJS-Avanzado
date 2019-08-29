import { createStore, applyMiddleware } from 'redux'

import { counterReducer } from './reducers'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware() 

export const store = createStore(
    counterReducer,
    {
        counter: 0
    },
    applyMiddleware(sagaMiddleware)
)

//sagaMiddleware.run(rootSaga)