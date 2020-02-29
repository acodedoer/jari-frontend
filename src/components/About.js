import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {AppContext} from  '../App'
import {ABOUTDESCRIPTION} from './translations/AboutTranslations'
import {ABOUT} from './translations/MenuTranslations'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "1em",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
        {(state)=>(
        <Card className={classes.root} >
            <CardContent>
                <Typography className={classes.pos} color="textPrimary" gutterBottom>
                    {state.language === 'Hausa'? ABOUT.hausa : ABOUT.english }
                </Typography>
                <Typography variant="body2" component="p" color="textPrimary">
                    {state.language === 'Hausa'? ABOUTDESCRIPTION.hausa : ABOUTDESCRIPTION.english }
                </Typography>
            </CardContent>
        </Card>)}
    </AppContext.Consumer>
  );
}
