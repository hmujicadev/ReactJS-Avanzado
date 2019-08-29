import {INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC} from './types'

export const increment =() => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const incrementAsync =() => {
    return {
        type: INCREMENT_ASYNC
    }
}

export const decrementAsync = () => {
    return {
        type: DECREMENT_ASYNC
    }
}
