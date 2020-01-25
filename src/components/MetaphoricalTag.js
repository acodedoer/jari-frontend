import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MetaphoricalIcon from '@material-ui/icons/Comment';

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#FBB13C',
      textTransform: "none"
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
  startIcon={<MetaphoricalIcon/>}
  onClick={()=>{props.onClick1(props.tag); props.onClick2("metaphorical")}}
>
  {props.tag}
</Button>
);
}

export default MetaphoricalTag;
