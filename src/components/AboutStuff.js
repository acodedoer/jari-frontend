import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AppContext} from  '../App'
import {CONTRIBUTORS, CONTRIBUTORSDESCRIPTION, CONTRIBUTORSLIST, CONTACT, CONTACTDESCRIPTION} from './translations/AboutTranslations'

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

const ListItems = (props) => (
  props.children.map((item) => (
    <li>{item}</li>
  ))   
)

export default function About() {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {(state)=>(
        <div className={classes.root}>
        {/* <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {state.language === 'Hausa'? FUTUREPLANS.hausa : FUTUREPLANS.english }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2" component="p" color="textPrimary">
              <ListItems>
               {state.language === 'Hausa'? FUTUREPLANSDESCRIPTION.hausa : FUTUREPLANSDESCRIPTION.english }
              </ListItems>  
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {state.language === 'Hausa'? CONTACT.hausa : CONTACT.english }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2" component="p" color="textPrimary">
            {state.language === 'Hausa'? CONTACTDESCRIPTION.hausa : CONTACTDESCRIPTION.english }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
            {state.language === 'Hausa'? CONTRIBUTORS.hausa : CONTRIBUTORS.english }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2" component="p" color="textPrimary">
              {state.language === 'Hausa'? CONTRIBUTORSDESCRIPTION.hausa : CONTRIBUTORSDESCRIPTION.english }
              <ListItems>{CONTRIBUTORSLIST}</ListItems>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>)}
    </AppContext.Consumer>
  );
}
