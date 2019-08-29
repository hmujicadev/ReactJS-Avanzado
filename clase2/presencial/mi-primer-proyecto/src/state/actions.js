import {SET_NOTICIAS, SET_NOTICIAS_VISTA} from './types'
import { getURLNoticias, setURLNoticiaLeida } from './api'

export const accionSetNoticias = noticias => {
    return {
        type: SET_NOTICIAS,
        noticias
    }
}

export const accionSetNoticiaLeida = id => {
    return {
        type: SET_NOTICIAS_VISTA,
        id
    }
}

export const getPageNoticias = () => dispatch => {
    getURLNoticias().then( ({data:noticias}) =>  dispatch(accionSetNoticias(noticias)))
}

export const setPageNoticiaLeida = id => dispatch => {
     setURLNoticiaLeida(id).then( () => { return dispatch(accionSetNoticiaLeida(id))
    })
}

