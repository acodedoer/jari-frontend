import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import NavigationMenu from './NavigationMenu'
import {AppContext} from  '../App'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#4b67a1',
    borderRadius:"50%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover': {
      background: "#4b67a1",}
  },
  title: {
    flexGrow: 1,
    width: "100%",
    textAlign: "right",
    marginLeft: 'auto',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {(state)=>(
        <div className={classes.root} style={{borderRadius:"50%"}}>
        <AppBar position="fixed" style={{ background: '#4b67a1' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <NavigationMenu setMode ={state.setMode} language={state.language} setLanguage={state.setLanguage} setNavTitle= {state.setNavTitle} literal_tags={props.literal_tags} metaphorical_tags ={props.metaphorical_tags} setAbout ={state.setAbout}/>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap edge="end" justify="space-between" margin-left="auto">
              Jari{state.navTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>)}
    </AppContext.Consumer>
  );
}
