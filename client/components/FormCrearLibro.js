import React from 'react';

//MaterialUI
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

//Components
import ButtonLoading from './ButtonLoading'

const useStyles = (theme) => ({
	appBar: {
		position: 'relative'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	}
});

const FormCrearLibro = ({ classes, handleClose, handleSubmit, handleChange, loading }) => {
	return (
		<div>
			<form autoComplete="off" 
                onSubmit={(e) => handleSubmit(e)}
            >
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={() => handleClose()} aria-label="Close">
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Nuevo Libro
							</Typography>
							{loading ? (
								<ButtonLoading />
							) : (
								<Button type="submit" color="inherit">
									Guardar
								</Button>
							)}
						</Toolbar>
					</AppBar>
					<List>
						<ListItem>
							<TextField
								required
								id="titulo"
								name="titulo"
								label="Título"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
							<TextField
								id="tomo"
								name="tomo"
								label="Tomo"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
						<Divider />
						<ListItem>
							<TextField
								required
								id="autor"
								name="autor"
								label="Autor"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
						<Divider />
						<ListItem>
							<TextField
								id="fecha_publicado"
								name="fecha_publicado"
								label="Año"
								className={classes.textField}
								fullWidth
								type="number"
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
							<TextField
								id="editorial"
								name="editorial"
								label="Editorial"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
							<TextField
								id="edicion"
								name="edicion"
								label="Edición"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
						<Divider />
						<ListItem>
							<TextField
								id="descripcion"
								name="descripcion"
								label="Descripción"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								multiline
								rowsMax="5"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
						<Divider />
						<ListItem>
							<TextField
								id="link"
								name="link"
								label="Link"
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
					</List>
				</form>
		</div>
	);
};

export default withStyles(useStyles)(FormCrearLibro);
