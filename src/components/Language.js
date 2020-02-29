import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 18,
    padding: 2,
    display: 'flex',
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(8px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#4b67a1',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function LanguageSwitch(props) {
  const [state, setState] = React.useState({
    checkedC: props.language==="Hausa"? true: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    if(state.checkedC===false){props.setLanguage("Hausa")} else {props.setLanguage('English')}
  };

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>English</Grid>
          <Grid item>
            <AntSwitch
              onChange={handleChange('checkedC')}
              checked={state.checkedC}
              value={"checkedC"}
            />
          </Grid>
          <Grid item>Hausa</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}
