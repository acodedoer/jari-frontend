import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MetaphoricalIcon from '@material-ui/icons/Comment';
import {AppContext} from  '../App';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const DisplayMetaphoricalTagsLinks = (props) => {
    const classes = useStyles();
    return (
      <AppContext.Consumer>
        {(state)=>(
          props.metaphorical_tags.map((tag) =>(
            <ListItem button className={classes.nested} onClick={()=>{state.setAbout(false); state.setMetaphoricalTag(tag.name); state.setMode("metaphorical"); state.setNavTitle(tag.name); props.toggleMenu()}}>
                <ListItemIcon>
                    <MetaphoricalIcon style={{fontSize:"medium", fill: "#FFC857"}}/>
                    </ListItemIcon>
                <ListItemText primary= {tag.name} />
            </ListItem>
          ))
        )}
      </AppContext.Consumer>
    )
  };


export default DisplayMetaphoricalTagsLinks;