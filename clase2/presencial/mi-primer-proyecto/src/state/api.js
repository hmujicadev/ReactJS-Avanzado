import axios from 'axios'

const URL = 'https://5c8ef17a3e557700145e85c7.mockapi.io/noticias'

export const getURLNoticias = () => {
    return axios(URL)
}

export const setURLNoticiaLeida = id => {
    return axios.put(URL + '/'+ id ,{
        id:id,seen:true 
    })
}
