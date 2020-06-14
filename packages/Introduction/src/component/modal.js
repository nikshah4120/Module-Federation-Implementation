import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pic from '../assests/news.jpg';
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
const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  var Im1 = new Image (); 
  Im1.src=pic;
  return (
    <ThemeProvider theme={theme}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="News"
          height="140"
          image = {Im1.src}
          title="Breaking News"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            News 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Random text
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>

  );
}
