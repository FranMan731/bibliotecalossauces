import React from 'react';

//MaterialUI
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SearchIcon from '@material-ui/icons/Search';

//Components
import ButtonBuscar from './ButtonBuscar';

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
	link: {
		paddingTop: theme.spacing(1),
		textAlign: 'center'
	},
	check: {
		paddingTop: theme.spacing(3),
		textAlign: 'center'
	},
	marginGrid: {
		marginTop: '10px'
	}
});

class BuscarComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			check: true
		};
	}

	handleCheck = () => {
		this.setState({
			check: !this.state.check
		});
	};

	render() {
		const { classes, handleChange, handleClick } = this.props;

		return (
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<SearchIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Buscar
					</Typography>
					<Grid container spacing={1}>
						<form
							className={classes.form}
							noValidate
							onSubmit={(e) => {
								e.preventDefault();
								e.stopPropagation();

								const form = e.target;
								const formData = new window.FormData(form);

								form.reset();
							}}
						>
							<Grid item sm={12}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="buscar"
									label="Buscar"
									placeholder="Ingresar autor, título o lo que desee buscar"
									name="buscar"
									autoFocus
									onChange={(e) => handleChange(e)}
								/>
							</Grid>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={4}>
									<FormControlLabel
										value="end"
										control={<Checkbox color="primary" onChange={this.handleCheck} />}
										label="Por tiempo"
										labelPlacement="end"
										className={classes.check}
									/>
								</Grid>
								<Grid item xs={6} sm={4}>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										id="desde"
										disabled={this.state.check}
										label="Desde"
										name="desde"
										type="number"
										autoFocus
										onChange={(e) => handleChange(e)}
									/>
								</Grid>
								<Grid item xs={6} sm={4}>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										disabled={this.state.check}
										id="hasta"
										label="Hasta"
										name="hasta"
										type="number"
										autoFocus
										onChange={(e) => handleChange(e)}
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.marginGrid}>
								<Grid item xs={12} sm={3} className={classes.link}>
									<Link href="#" variant="body2">
										Instrucciones
									</Link>
								</Grid>
								<Grid item xs={12} sm={9}>
									<ButtonBuscar handleClick={handleClick} />
								</Grid>
							</Grid>
						</form>
					</Grid>
				</div>
			</Container>
		);
	}
}

export default withStyles(useStyles)(BuscarComponent);
