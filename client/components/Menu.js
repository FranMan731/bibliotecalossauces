import React from 'react';

//MaterialUI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

//Logic
import redirect from '../lib/redirect'

//SweetAlert
import Swal from 'sweetalert2';

import Cookies from 'js-cookie';

const useStyles = (theme) => ({
	appBar: {
		top: 'auto',
		bottom: 0
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	grow: {
		flexGrow: 1
	}
});

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes, handleClickOpen } = this.props;
        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    {/*<IconButton edge="start" color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>*/}
                    <IconButton edge="start" color="inherit" onClick={() => redirect({}, '/')}>
                        <SearchIcon />
                    </IconButton>
                    <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={() => redirect({}, '/crear')}>
                        <AddIcon />
                    </Fab>
                    <div className={classes.grow} />
                    <IconButton edge="end" color="inherit" 
                    onClick={() => {
                        Swal.fire({
                            title: '¿Esta seguro de cerrar sesión?',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, cerrar'
                        }).then((result) => {
                            if (result.value) {
                                Cookies.set('token', '');

                                redirect({}, '/login')
                            }
                        })
                    }}>
                        <PowerSettingsNew />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
        }
}

export default withStyles(useStyles)(Menu);