import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  mybtn:{
    float:'left'
  }
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button style={{float:[props.flt],backgroundColor:[props.clr]}} className={classes.mybtn} type={props.type} variant="contained" color={props.mycolor} className={classes.button}>
        {props.name}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);