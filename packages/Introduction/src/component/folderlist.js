import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FolderRow from './createrow';
import Box from '@material-ui/core/Box';
import ModalData from './modal';
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root:{
       backgroundColor: ["none"],
      },
    },
  },
});
export default function FolderList() {
  
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
