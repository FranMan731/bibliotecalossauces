import React from 'react';
import { withApollo } from 'react-apollo';
import cookie from 'cookie';
import Cookies from 'js-cookie'
import redirect from '../lib/redirect';
import ButtonLoading from './ButtonLoading';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SnackbarContent from '@material-ui/core/SnackbarContent';

//Graphql
import { login } from '../graphql/mutation';

const useStyles = (theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	snackbar: {
		margin: theme.spacing(1)
	},
	btnCenter: {
		textAlign: 'center'
	}
});

class LoginBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			loading: false,
			email: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleLoading = this.handleLoading.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleError = this.handleError.bind(this)
	}

	componentDidMount() {
		const cook = Cookies.get('token')
		console.log(cook)
		if(cook && cook !== '' && cook !== 'undefined') {
			redirect({}, '/')
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.handleLoading();

		const { client } = this.props;
		const { email, password } = this.state;

		client.mutate({
			mutation: login,
			variables: { email, password }
		}).then(data => {
			this.handleLoading()

			document.cookie = cookie.serialize('token', data.data.login.token, {
				maxAge: 30 * 24 * 60 * 60 // 30 days
			});

			redirect({}, '/')
		}).catch(e => {
			this.handleLoading()
			this.handleError()
			console.log(e)
		})
	};
	
	handleError = () => {
		this.setState({
			error: !this.state.error
		})
	}

	handleLoading = () => {
		this.setState({
			loading: !this.state.loading
		})
	}

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState((prevState) => ({
			...prevState,
			[name]: value
		}));
	}

	render() {
		const { classes } = this.props;

		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={(e) => this.handleSubmit(e)}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => this.handleChange(e)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(e) => this.handleChange(e)}
						/>
						{this.state.error ? (
							<SnackbarContent
								className={classes.snackbar}
								message="Error en los datos ingresados"
							/>
						) : ''}
						{this.state.loading ? (
							<div className={classes.btnCenter}>
								<ButtonLoading />
							</div>
						) : (
							<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
								Sign In
							</Button>
						)}
					</form>
				</div>
				<Box mt={5}>
					<Typography variant="body2" color="textSecondary" align="center">
						{'Built with love by '}
						<Link color="inherit" href="https://google.com/">
							Manzanares Studios
						</Link>
					</Typography>
				</Box>
			</Container>
		);
	}
}

export default withApollo(withStyles(useStyles)(LoginBox));
