import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LiteralIcon from '@material-ui/icons/ModeComment';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4b67a1',
    textTransform: "none",
    '&:hover': {
      backgroundColor: '#3b517e'}
  },
}));

const LietralTag = (props) => {
  const classes = useStyles();

  return (
        <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={()=>{props.onClick1(props.tag); props.onClick2("literal")}}
        startIcon={<LiteralIcon style={{fill: "#ED6A5E"}}/>}
      >
        {props.tag}
      </Button>
  );
}

export default LietralTag;
