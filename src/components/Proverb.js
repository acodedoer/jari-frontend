import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LiteralTag from './LiteralTag';
import MetaphoricalTag from './MetaphoricalTag';
import {AppContext} from  '../App';
import clsx from 'clsx';

const useStyles = makeStyles(theme =>({
  card: {
    marginTop: "1em",
    marginBottom: "1em",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const Proverb = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <AppContext.Consumer>
      {(state)=>(
        <Card className={classes.card}>
        <CardContent>
          <Typography>
              {props.proverb.name}
          </Typography>
        </CardContent>
  
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardActions style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
  
            {props.proverb.literalTags.map((literalTag, index)=>(
                <LiteralTag key={index} tag={literalTag.name} onClick1={state.setLiteralTag} onClick2 = {state.setMode} setNavTitle ={state.setNavTitle}/>
            ))}
  
          {props.proverb.metaphoricalTags.map((metaphoricalTag, index)=>(
                <MetaphoricalTag key={index} tag={metaphoricalTag.name} onClick1={state.setMetaphoricalTag} onClick2 = {state.setMode} setNavTitle ={state.setNavTitle}/>
            ))}
            
          </CardActions>
        </Collapse>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
      </Card>
    )}
    </AppContext.Consumer>
  );
}

export default Proverb;