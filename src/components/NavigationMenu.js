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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LiteralTagsLinks from './LiteralTagsLinks';
import MetaphoricalTagsLinks from './MetaphoricalTagsLinks';
import LanguageIcon from '@material-ui/icons/Translate';
import Language from './Language'
import {ABOUT, ALLPROVERBS, LITERALTAGS, METAPHORICALTAGS, LANGUAGE} from '../langauge/MenuLanguage'


const useStyles = makeStyles({
  root:{
    padding:"0px"
  },
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
  divider: {
    padding: "1px",
    backgroundColor:"#4b67a1" ,
  },
  item: {
    marginTop:"7px",
    marginBottom:"7px"
  }
});

export default function NavigationMenu(props) {
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
      <Divider   className={classes.divider}/>
      <ListItem button onClick={()=>{setState({ ...state, [side]: false }); props.setAbout(false); props.setMode("all"); props.setNavTitle("")}}>
        <ListItemIcon className={classes.item}>
          <AllIcon style={{color:'#4b67a1'}} />
        </ListItemIcon>
        {props.language==='Hausa'?<ListItemText primary={ALLPROVERBS.hausa} />:<ListItemText primary={ALLPROVERBS.english} />}
      </ListItem>

      <Divider   className={classes.divider}/>

      <ListItem button onClick={handleClickLTags}>
        <ListItemIcon className={classes.item}>
        <LiteralIcon style={{fill: "#ED6A5E"}}/>
        </ListItemIcon>
        {props.language==='Hausa'?<ListItemText primary={LITERALTAGS.hausa} />:<ListItemText primary={LITERALTAGS.english} />}
        {openLTags ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openLTags} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Divider variant="inset" component="li" className={classes.divider}/>
              <LiteralTagsLinks literal_tags={props.literal_tags} setAbout={props.setAbout} toggleMenu={()=>setState({ ...state, [side]: false })} />
        </List>
      </Collapse>
      <Divider  className={classes.divider}/>
      <ListItem button onClick={handleClickMTags}>
        <ListItemIcon className={classes.item}>
        <MetaphoricalIcon style={{fill: "#FFC857"}}/>
        </ListItemIcon>
        {props.language==='Hausa'?<ListItemText primary={METAPHORICALTAGS.hausa} />:<ListItemText primary={METAPHORICALTAGS.english} />}
        {openMTags ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openMTags} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Divider variant="inset" component="li" className={classes.divider}/>
              <MetaphoricalTagsLinks metaphorical_tags ={props.metaphorical_tags} setAbout={props.setAbout} toggleMenu={()=>setState({ ...state, [side]: false })}/>
        </List>
      </Collapse>
      <Divider  className={classes.divider}/>

      <ListItem button onClick={()=>{props.setAbout(true); setState({ ...state, [side]: false })}}>
        <ListItemIcon className={classes.item}>
          <AboutIcon style={{color:"#55b092"}} />
        </ListItemIcon>
        {props.language==='Hausa'?<ListItemText primary={ABOUT.hausa} />:<ListItemText primary={ABOUT.english} />}
      </ListItem>
      <Divider className={classes.divider}/>
      <ListItem button >
        <ListItemIcon className={classes.item}>
          <LanguageIcon />
        </ListItemIcon>
        <Language setLanguage={props.setLanguage}/>
      </ListItem>
      <Divider className={classes.divider}/>
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
