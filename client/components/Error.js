import React from 'react';
import redirect from '../lib/redirect'
//MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
	snackbar: {
		margin: theme.spacing(1)
	}
}));

const actionServer = (
    <Button color="secondary" size="small">
        Reload
    </Button>
);

const actionVacio = (
	<Button color="secondary" size="small" onClick={() => { redirect({}, '/crear')}}>
        Crear libro
    </Button>
)

const Error = ({tipo, message}) => {
	const classes = useStyles();

	let action = tipo === "vacio" ? (actionVacio) : (actionServer)

	return (
		<div className={classes.root}>
			<SnackbarContent
				className={classes.snackbar}
				message={message}
                action={action}
			/>
		</div>
	);
};

export default Error;
