import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Folder from './folderelement';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const CreateRow = () =>{
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Folder /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Folder /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Folder /></Paper>
        </Grid>
      </React.Fragment>
    );
}
export default CreateRow;