import { createStore, applyMiddleware } from 'redux'

import { noticiasReducer } from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(
    noticiasReducer,
    {
        noticias: []
    },
    applyMiddleware(thunk)
)