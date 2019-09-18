import React, { Component } from 'react';
import Link from 'next/link';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import TablePagination from "@material-ui/core/TablePagination";

//Components
import Error from './Error';

const useStyles = (theme) => ({
	fab: {
		margin: theme.spacing(1),
	},
	text: {
		padding: theme.spacing(2, 2, 0),
		textAlign: 'center'
	},
	titulo: {
		fontWeight: 500
	},
	autor: {
		color: '#42ab1f',
		fontWeight: 400
	},
	paper: {
		paddingBottom: 50,
		marginTop: 10
	},
	list: {
		marginBottom: theme.spacing(2)
	},
	subheader: {
		backgroundColor: theme.palette.background.paper
	}
});

class Lista extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes, libros, tipo } = this.props;
		
		return (
			<Paper square className={classes.paper}>
				<Typography className={classes.text} variant="h5" gutterBottom>
					{tipo}
				</Typography>
				<List className={classes.list}>
					<Divider component="li" />
					{libros && libros.length > 0 ? (
						libros.map((libro, index) => (
							<React.Fragment key={index}>
								<Link href={`/libro?id=${libro.id}`} as={`/libro/${libro.id}`}>
									<ListItem button>
										<ListItemText
											primary={
												<React.Fragment>
													<Typography
														component="span"
														variant="h6"
														className={classes.titulo}
														color="textPrimary"
													>
														{libro.titulo}
													</Typography>
													{libro.tomo ? ` — Tomo: ${libro.tomo}` : ' '}
												</React.Fragment>
											}
											secondary={
												<React.Fragment>
													<Typography component="span" variant="body2" className={classes.autor}>
														{libro.autor}
													</Typography>
													{libro.fecha_publicado ? ` — ${libro.fecha_publicado}` : ' '}
												</React.Fragment>
											}
										/>
									</ListItem>
								</Link>
								<Divider component="li" />
							</React.Fragment>
						))
					) : (
						<Error tipo="vacio" message="No hay libros cargados" />
					)}
				</List>
			</Paper>
		);
	}
}

export default withStyles(useStyles)(Lista);
