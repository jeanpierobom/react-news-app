import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginBottom: 10,
    maxWidth: '90vw',
  },
  image: {
    width: 256,
    // height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'top'
  },
  title: {
    fontWeight: 'bold',
  }
}));

const Article = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grow direction="up" in={true} mountOnEnter unmountOnExit timeout={500}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={props.item.title} src={props.item.urlToImage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={9}>
                <Typography className={classes.title}>
                  {props.item.title}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" style={{ textAlign: "right", overflow: "hidden" }}>
                  {props.item.author &&
                    <React.Fragment>Author: {props.item.author}</React.Fragment>
                  }
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  {props.item.content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </div>
  )
}

export default Article