import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import LiteralIcon from '@material-ui/icons/ModeComment';
import {AppContext} from  '../App';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const DisplayLiteralTagsLinks = (props) => {
    const classes = useStyles();
    return (
      <AppContext.Consumer>
        {(state)=>(
          props.literal_tags.map((tag) =>(
            <ListItem button className={classes.nested} onClick={()=>{state.setAbout(false); state.setLiteralTag(tag.name); state.setMode("literal"); state.setNavTitle(tag.name); props.toggleMenu()}}>
                <ListItemIcon>
                    <LiteralIcon style={{fontSize:"medium", fill: "#ED6A5E"}}/>
                    </ListItemIcon>
                <ListItemText primary= {tag.name} />
            </ListItem>
          ))
        )}
      </AppContext.Consumer>
    )
  };


export default DisplayLiteralTagsLinks;