import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FolderRow from './createrow';
import Box from '@material-ui/core/Box';
import ModalData from './modal';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

export default function FolderList() {
  const classes = useStyles();
  
  return (
    <Box m={4}>
    <Grid container spacing={4}>
    <Grid container item xs={12} spacing={3}>
     <FolderRow />
    </Grid>
    <Grid container item xs={12} spacing={3}>
    <FolderRow />
    </Grid>
    <Grid container item xs={12} spacing={3}>
    <FolderRow />
    </Grid>
    <Grid container item xs={12} spacing={3}>
      <React.Fragment>
        <Grid item xs={4}>
          <ModalData />
        </Grid>
        <Grid item xs={4}>
        <ModalData />
        </Grid>
        <Grid item xs={4}>
        <ModalData />
        </Grid>
    </React.Fragment>
    </Grid>
    </Grid>
    </Box>
  );
}
