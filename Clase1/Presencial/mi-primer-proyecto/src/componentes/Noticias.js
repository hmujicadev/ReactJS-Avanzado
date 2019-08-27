import React from 'react';
import './Noticias.css'
import Noticia from './Noticia'

import axios from 'axios'

class Noticias extends React.Component {
    state = {
        noticias: []
    }

   /*  componentDidMount(){
        fetch('https://5d6462f426046800144d757e.mockapi.io/noticias')
        .then( response =>response.json())
        .then( json => {
            console.log(json)
            this.setState({
                noticias : json
            }
            )
        })
    } */

    componentDidMount(){
        axios('https://5d6462f426046800144d757e.mockapi.io/noticias')
        .then( ({data:json}) => {
            console.log(json)
            this.setState({
                noticias : json
            }
            )
        })
    }
    
    marcarLeida(id){
        console.log('Leida')
        let noticias = this.state.noticias;
        let index =noticias.findIndex(noticia => noticia.id === id);
        console.log(index)

        noticias[index].seen =true;

       this.setState({
            noticias :noticias
        })
    }

    render (){
        const{ noticias} =this.state;
        return (
            <div className="Noticias">
                <div className="container">
                <div className="jumbotron">
                    <div className="jumbotron my-3">
                        <h1>Noticias</h1>
                        {
                            noticias.filter(noticia =>!noticia.seen).map(noticia => {
                               
                                return (
                                   
                                    <Noticia key={noticia.id} noticia={noticia} marcarLeida={id=> 
                                        this.marcarLeida(id)}/>

                                )
                            } )
                        }
                    </div>
                    </div>

                </div>
            </div>
        );
    }
}
    

export default Noticias;
