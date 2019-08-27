import React from 'react';
import './Noticia.css';


function Noticia(props) {

  const id= props.noticia.id;
  return (
    <div className="Noticia">
      <div className="jumbotron" onClick={ id=>
         props.marcarLeida(id)
      } >
        <div>
          <h4>Componente Principal- {props.noticia.id} </h4>
          <div className="media my-5">
          <p>
            {props.noticia.title} - {props.noticia.seen ? 'Leida' : 'No leida'}
          </p>
          <img src={props.noticia.avatar} noticia={props.noticia.image}  />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Noticia;
