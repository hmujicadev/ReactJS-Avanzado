import {SET_NOTICIAS, SET_NOTICIAS_VISTA} from './types'

export const noticiasReducer = (state, action) => {
    switch(action.type) {
        case SET_NOTICIAS :
            return {
                noticias : action.noticias
            }

        case SET_NOTICIAS_VISTA :
            const noticiasList = [...state.noticias]
            noticiasList.find(noticia => noticia.id === action.id).seen = true;
            return {
                noticias : noticiasList
            }
        default:
            return state;
    }
}
