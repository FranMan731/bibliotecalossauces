import React from 'react';

//MaterialUI
import { withStyles } from '@material-ui/core/styles';
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
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = (theme) => ({
	appBar: {
		position: 'relative'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
    },
    fab: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const LibroComponent = ({ handleCloseLibro, libro, classes, handleDeleteClick, handleOpenEditar }) => {
	return (
		<Dialog fullScreen open={true} onClose={() => handleCloseLibro()}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton edge="start" color="inherit" onClick={() => handleCloseLibro()} aria-label="Close">
						<CloseIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Libro
					</Typography>
                    <Fab aria-label="Delete" className={classes.fab} onClick={(e) => handleDeleteClick(e)} >
                        <DeleteIcon />
                    </Fab>
					<Button variant="contained" color="secondary" className={classes.button} onClick={() => handleOpenEditar()}>
                        Editar
                    </Button>
				</Toolbar>
			</AppBar>
			<List>
				<ListItem>
					<ListItemText primary="Título" secondary={libro.titulo} />
                    <ListItemText primary="Tomo" secondary={libro.tomo ? libro.tomo : '---'} />
				</ListItem>
				<Divider />
                <ListItem>
					<ListItemText primary="Autor" secondary={libro.autor} />
				</ListItem>
				<Divider />
                <ListItem>
					<ListItemText primary="Año" secondary={libro.fecha_publicado ? libro.fecha_publicado : '---'} />
                    <ListItemText primary="Editorial" secondary={libro.editorial ? libro.editorial : '---'} />
                    <ListItemText primary="Edición" secondary={libro.edicion ? libro.edicion : '---'} />
				</ListItem>
				<Divider />
                <ListItem>
					<ListItemText primary="Descripción" secondary={libro.descripcion ? libro.descripcion : '---'} />
				</ListItem>
                <ListItem>
					<ListItemText primary="Descargar Libro" secondary={libro.link ? libro.link : '---'} />
				</ListItem>
			</List>
		</Dialog>
	);
};

export default withStyles(useStyles)(LibroComponent);
