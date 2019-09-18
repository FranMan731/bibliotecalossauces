import React, { Component } from 'react';
import redirect from '../lib/redirect';

//MaterialUI
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

//Components
import FormCrearLibro from '../components/FormCrearLibro';

//GraphQL
import { withApollo } from 'react-apollo';
import { createLibro } from '../graphql/mutation';

//SweetAlert
import Swal from 'sweetalert2';

import Cookies from 'js-cookie'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class CrearLibroContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datos: {
				titulo: '',
				tomo: '',
				autor: '',
				fecha_publicado: 0,
				editorial: '',
				edicion: '',
				descripcion: '',
				link: ''
			},
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLoading = this.handleLoading.bind(this);
	}

	componentDidMount() {
        const cook = Cookies.get('token')
        
        if(!cook || cook === null || cook === 'undefined') {
            redirect({}, '/login')
        }
    }

	handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.handleLoading();

		const { client } = this.props;

		let data = {
			...this.state.datos
		};

		data.fecha_publicado = parseInt(data.fecha_publicado);

		client
			.mutate({
				mutation: createLibro,
				variables: { data }
			})
			.then((data) => {
				this.handleLoading();

				Swal.fire({
					title: 'Creado',
					text: 'Se creó el libro satisfactoriamente',
					type: 'success',
					confirmButtonText: 'Ok'
				}).then(() => {
					this.handleClose();
				});
			})
			.catch((err) => {
				this.handleLoading();
				console.log(err);
				Swal.fire({
					title: 'Error',
					text: 'Se ha producido un error al intentar crear el libro, intente luego.',
					type: 'error',
					confirmButtonText: 'Ok'
				});
			});
	};

	handleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
    };
    
	handleChange = (e) => {
		const { name, value } = e.target;

		if(name !== 'link') {
			this.setState((prevState) => ({
				datos: {
					...prevState.datos,
					[name]: value.toUpperCase()
				}
			}));
		} else {
			this.setState((prevState) => ({
				datos: {
					...prevState.datos,
					[name]: value
				}
			}));
		}
		
	};

	handleClose = () => {
		redirect({}, '/');
	};

	render() {
		const { loading } = this.state;
		return (
			<Dialog fullScreen open={true} onClose={this.handleClose} TransitionComponent={Transition}>
				<FormCrearLibro
					loading={loading}
					handleClose={this.handleClose}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</Dialog>
		);
	}
}

export default withApollo(CrearLibroContainer);
