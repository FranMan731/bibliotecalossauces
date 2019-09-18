import React, { Component } from 'react'
import redirect from '../lib/redirect'

//Component
import LibroComponent from '../components/LibroComponent'
import LibroEditarComponent from '../components/LibroEditarComponent'

//SweetAlert
import Swal from 'sweetalert2'

//Graphql
import { deleteLibro, updateLibro } from '../graphql/mutation'

import Cookies from 'js-cookie'

class LibroContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editar: false,
            datos: {
                id: '',
                titulo: '',
                tomo: '',
                autor: '',
                fecha_publicado: '',
                editorial: '',
                edicion: '',
                descripcion: '',
                link: ''
            }
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.eliminarLibro = this.eliminarLibro.bind(this)
        this.handleCloseLibro = this.handleCloseLibro.bind(this)
        this.handleOpenEditar = this.handleOpenEditar.bind(this)
        this.handleCloseEditar = this.handleCloseEditar.bind(this)
        this.handleChangeEditar = this.handleChangeEditar.bind(this)
        this.handleClickEditar = this.handleClickEditar.bind(this)
    }

    componentDidMount() {
        const cook = Cookies.get('token')
            
        if(!cook || cook === null || cook === 'undefined') {
            redirect({}, '/login')
        }
        
        const { libro } = this.props

        this.setState({
            datos: {
                id: libro.id,
                titulo: libro.titulo,
                tomo: libro.tomo,
                autor: libro.autor,
                fecha_publicado: libro.fecha_publicado,
                editorial: libro.editorial,
                edicion: libro.edicion,
                descripcion: libro.descripcion,
                link: libro.link
            }
        })
    }

    /* Ver libro */
    handleCloseLibro = () => {
        redirect({}, '/')
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        Swal.fire({
            title: '¿Esta seguro de eliminarlo?',
            text: "Si elimina el libro, no hay vuelta atrás",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.value) {
                this.eliminarLibro();
            }
        })
    }

    eliminarLibro = () => {
        const { client, id } = this.props

        const datos = {
            'where': {
                id
            }
        }

        client.mutate({
            mutation: deleteLibro,
            variables: datos
        }).then(resp => {
            Swal.fire(
                '¡Eliminado!',
                `El libro ${resp.data.deleteLibro.titulo} ha sido eliminado.`,
                'success'
            ).then(() => {
                redirect({}, '/')
            })
        }).catch(err => {
            console.log(err);
            Swal.fire(
                'No se eliminó',
                'Por un error en el servidor, no se ha podido eliminar el libro.',
                'error'
            )
        })
    }
    /* Fin ver Libro */

    /* Editar Libro */
    handleOpenEditar = () => {
        this.setState({
            editar: true
        });
    }

    handleCloseEditar = () => {
        this.setState({
            editar: false
        });
    }

    handleChangeEditar = (e) => {
        const { name, value } = e.target

        this.setState(prevState => ({
            datos: {
                ...prevState.datos,
                [name]: value
            }
        }))
    }

    handleClickEditar = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const { client, id } = this.props;
        const libro = this.state.datos;
        
        const data = {
            titulo: libro.titulo,
            tomo: libro.tomo,
            autor: libro.autor,
            fecha_publicado: libro.fecha_publicado,
            editorial: libro.editorial,
            edicion: libro.edicion,
            descripcion: libro.descripcion,
            link: libro.link
        }
        const where = {
            id
        }

        client.mutate({
            mutation: updateLibro,
            variables: { data, where }
        }).then(data => {
            Swal.fire({
                title: 'Editado',
                text: 'Se editó el libro',
                type: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                this.handleCloseEditar()
            })
        }).catch(err => {
            Swal.fire({
                title: '¡Error!',
                text: 'Ha sucedido un error, intente luego.',
                type: 'error',
                confirmButtonText: 'Ok'
            })
        })
    }
    /* Fin Editar Libro */
    
    render() {
        return (
            <div>
                <LibroComponent libro={this.state.datos} handleCloseLibro={this.handleCloseLibro} handleDeleteClick={this.handleDeleteClick} handleOpenEditar={this.handleOpenEditar} />     
                <LibroEditarComponent open={this.state.editar} handleChange={this.handleChangeEditar} handleClose={this.handleCloseEditar} libro={this.props.libro} handleClickEditar={this.handleClickEditar} />
            </div>
        )
    }
}

export default LibroContainer
