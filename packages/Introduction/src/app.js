import React from 'react';
import FolderList from './component/folderlist';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      background: 'linear-gradient(45deg, #E3F2FD 30%, #E0F2F1 90%)',
      
    },
  }));
const App = () => {
    const classes = useStyles();
    return(
        <div>
        <Box width="100%" height="100%" className={classes.root}>
        <FolderList />
        </Box>
        </div>
    );
}

export default App;