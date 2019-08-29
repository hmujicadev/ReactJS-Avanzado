import React from 'react';
import './Noticia.css';

function Noticia(props) {
    const id = props.noticia.id;
    return (
        <div className="Noticia">
            <div className="jumbotron" onClick={ () => props.marcarLeida(id) }>
                <div>
                    <h4><u>Noticia Nro. {id}</u></h4>
                    <div className="media my-5">
                        <img src={props.noticia.image} alt={props.noticia.image}/>
                        <div className="media-body ml-3">
                            {props.noticia.title} - {props.noticia.seen ? 'Leída' : 'No leída'}
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noticia;
