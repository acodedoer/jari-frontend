import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MetaphoricalIcon from '@material-ui/icons/Comment';

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#4b67a1',
      textTransform: "none",
      '&:hover': {
        backgroundColor: '#3b517e'}
    },
  }));

const MetaphoricalTag = (props) => {
const classes = useStyles();
return (
  <Button
  variant="contained"
  color="primary"
  size="small"
  className={classes.button}
  startIcon={<MetaphoricalIcon style={{fill: "#FFC857"}}/>}
  onClick={()=>{props.onClick1(props.tag); props.onClick2("metaphorical"); props.setNavTitle(props.tag)}}
>
  {props.tag}
</Button>

);
}

export default MetaphoricalTag;
