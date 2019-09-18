import React from 'react';

//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//Containers
import Inicio from '../containers/Inicio'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Container maxWidth="md">
          <CssBaseline />
          <Inicio where={this.props.where} />
        </Container>
    );
  }
}

Search.getInitialProps = async function({ req, query, params }) {
  if (req) {
    try {
        return { query: req.query, params: req.params };

        
    } catch(err) {
        return { query: req.query, params: req.params }
    }
  }

  const { tipo, buscar, desde, hasta } = query;

  const tipos = {
      titulo: 'titulo_contains',
      autor: 'autor_contains',
      editorial: 'editorial_contains',
      edicion: 'edicion_contains',
      descripcion: 'descripcion_contains'
  }
  
  let where = {};

  if(tipo) {
    if(buscar !== '' && buscar) {
      where[tipos[tipo]] = buscar
    }

    if(desde !== '' && desde) {
      where.fecha_publicado_gte = parseInt(desde)
    }

    if(hasta !== '' && hasta) {
      where.fecha_publicado_lte = parseInt(hasta)
    }
  }


  return {
    where
  }
}

export default Search