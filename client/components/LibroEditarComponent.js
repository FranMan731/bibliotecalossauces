import React from 'react';

//MaterialUI
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
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

const LibroEditarComponent = ({ classes, open, handleClose, handleClickEditar, handleChange, libro }) => {
	return (
		<Dialog fullScreen open={open} onClose={() => handleClose()}>
			<form autoComplete="off" 
                onSubmit={(e) => handleClickEditar(e)}
            >
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={() => handleClose()} aria-label="Close">
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Editar Libro
							</Typography>
							<Button type="submit" variant="contained" color="secondary">
								Guardar
							</Button>
						</Toolbar>
					</AppBar>
					<List>
						<ListItem>
							<TextField
								required
								id="titulo"
								name="titulo"
                                label="Título"
                                defaultValue={libro.titulo}
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
                                defaultValue={libro.tomo}
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
                                defaultValue={libro.autor}
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
                                defaultValue={libro.fecha_publicado}
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
                                defaultValue={libro.editorial}
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
                                defaultValue={libro.edicion}
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
                                defaultValue={libro.descripcion}
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
								defaultValue={libro.link}
								className={classes.textField}
								fullWidth
								margin="normal"
								variant="outlined"
								onChange={(e) => handleChange(e)}
							/>
						</ListItem>
					</List>
				</form>
		</Dialog>
	);
};

export default withStyles(useStyles)(LibroEditarComponent);