import React, { Component } from 'react'

//Components
import Lista from '../components/Lista'
import Menu from '../components/Menu'
import Error from '../components/Error'
import Loading from '../components/Loading'

//GraphQL
import { Query } from 'react-apollo';
import { allLibros } from '../graphql/query';

import Cookies from 'js-cookie'

export default class Inicio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipo: 'Libros'
        }
    }
    
    componentDidMount() {
        const cook = Cookies.get('token')
        
        if(!cook || cook === null || cook === 'undefined') {
            redirect({}, '/login')
        }
    }

    render() {
        const { tipo, openCrear  } = this.state
        const { where } = this.props

        let optionsLibros = {
            where,
            orderBy: "createdAt_DESC"
        }

        return (
            <div>
                <Query query={allLibros} variables={optionsLibros}>
                    {({ loading, error, data: { libroes }, refetch }) => {
                        if (error) return <Error tipo="server" message="No se pudo obtener los datos." />
                        if (loading) return <Loading />
                        
                        return <Lista libros={libroes} tipo={tipo} />
                    }}
                </Query>
                <Menu handleClickOpen={this.handleClickOpenCrearLibro} />
            </div>
        )
    }
}
