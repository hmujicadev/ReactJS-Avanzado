import React from 'react';
import './Noticias.css';

import Noticia from './Noticia'

import { connect } from 'react-redux'

import { getPageNoticias, setPageNoticiaLeida } from '../state/actions'



class Noticias extends React.Component {

    state = {
        noticias : []
    }

    componentDidMount() {
        this.props.getNoticias()
        /* fetch('https://5c8ef17a3e557700145e85c7.mockapi.io/noticias')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            this.setState({
                noticias : json 
            })
        }) */        
    }

    marcarLeida(id) {
        console.log('Leidad',id)
        this.props.setNoticiasLeida(id)
       /*  console.log('Leida: ' + id)
        let noticias = this.state.noticias;
        let index = noticias.findIndex( noticia => noticia.id === id);
        console.log(index)
        noticias[index].seen = true;
        this.setState({
            noticias : noticias 
        }) */
    }

    render() {
        const { noticias } = this.props;
        return (
            <div className="Noticias">
                <div className="container">
                    <div className="jumbotron my-3">
                        <h1>Noticias</h1>
                        <div className="my-5"></div>
                        {
                        noticias.filter(noticia => !noticia.seen).map( noticia => {
                            //console.log(noticia);
                            return (
                                <Noticia key={noticia.id} noticia={noticia} marcarLeida={id => this.marcarLeida(id)}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    noticias : state.noticias
})
const mapDispatchToProps = dispatch => ({
    getNoticias : () => dispatch(getPageNoticias()),
    setNoticiaLeida: id => dispatch(setPageNoticiaLeida(id))
})

export default connect(mapStateToProps, mapDispatchToProps )(Noticias);
