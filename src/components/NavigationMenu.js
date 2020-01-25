import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LiteralTagsLinks from './LiteralTagsLinks';
import MetaphoricalTagsLinks from './MetaphoricalTagsLinks';


const useStyles = makeStyles({
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
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="All" />
      </ListItem>

      <ListItem button onClick={handleClickLTags}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Literal Tags" />
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
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Metaphorical Tags" />
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
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}> <MenuIcon/> </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
