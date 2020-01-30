import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AllIcon from '@material-ui/icons/DoneAll';
import AboutIcon from '@material-ui/icons/Info';

import MetaphoricalIcon from '@material-ui/icons/Comment';

import Collapse from '@material-ui/core/Collapse';
import LiteralIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LiteralTagsLinks from './LiteralTagsLinks';
import MetaphoricalTagsLinks from './MetaphoricalTagsLinks';


const useStyles = makeStyles({
  button: {
    '&:hover': {
      backgroundColor: '#3b517e'}
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavigationMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [openMTags, setOpenM] = React.useState(false);

  const [openLTags, setOpenL] = React.useState(false);

  const handleClickMTags = () => {
    setOpenM(!openMTags);
  };

  const handleClickLTags = () => {
    setOpenL(!openLTags);
  };
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>{}}
      onKeyDown={()=>{}}
    >

    <List
      component="nav"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <AllIcon style={{color:'#4b67a1'}} />
        </ListItemIcon>
        <ListItemText primary="All proverbs" />
      </ListItem>

      <ListItem button onClick={handleClickLTags}>
        <ListItemIcon>
        <LiteralIcon style={{fill: "#ED6A5E"}}/>
        </ListItemIcon>
        <ListItemText primary="Literal tags" />
        {openLTags ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openLTags} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider/>
              <LiteralTagsLinks/>
          <Divider/>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickMTags}>
        <ListItemIcon>
        <MetaphoricalIcon style={{fill: "#FFC857"}}/>
        </ListItemIcon>
        <ListItemText primary="Metaphorical tags" />
        {openMTags ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openMTags} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider/>
              <MetaphoricalTagsLinks/>
          <Divider/>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <AboutIcon style={{color:"#55b092"}} />
        </ListItemIcon>
        <ListItemText primary="About Jari" />
      </ListItem>
    </List>
    </div>
  );

  return (
    <div>
      <Button className={classes.button} onClick={toggleDrawer('left', true)}> <MenuIcon style={{color:"white"}}/> </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
