import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(20),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
    textAlign: 'center'
  },
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <div>
            <LinearProgress className={classes.progress} />
            <Typography className={classes.text} variant="h5" gutterBottom>
              Cargando...
            </Typography>
        </div>
    );
};

export default Loading;