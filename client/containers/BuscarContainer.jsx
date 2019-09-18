import React, { Component } from 'react'

//Components
import BuscarComponent from '../components/BuscarComponent'
import redirect from '../lib/redirect'
import Menu from '../components/Menu'
import Cookies from 'js-cookie';

class BuscarContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datos: {
                buscar: '',
                desde: '',
                hasta: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
    };

    componentDidMount() {
        const cook = Cookies.get('token')
        
        if(!cook || cook === null || cook === 'undefined') {
            redirect({}, '/login')
        }
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState(prevState => ({
            datos: {
                ...prevState.datos,
                [name]: value.toUpperCase()
            }
        }))
    }

    handleClick = value => {
        const { buscar, desde, hasta } = this.state.datos;

        redirect({}, `/search?tipo=${value}&buscar=${buscar}&desde=${desde}&hasta=${hasta}`)
    }

    render() {
        return (
            <div>
                <BuscarComponent handleChange={this.handleChange} handleClick={this.handleClick} />
                <Menu />
            </div>
        )
    }
}

export default BuscarContainer