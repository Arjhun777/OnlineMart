import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

//Material-ui styles 
function styled(Component) {
    return (style, options) => {
      function StyledComponent(props) {
        const { classes, className, ...other } = props;
        return <Component className={classNames(classes.root, className)} {...other} />;
      }
      StyledComponent.propTypes = {
        classes: PropTypes.object.isRequired,
        className: PropTypes.string,
      };
      const styles =
        typeof style === 'function' ? theme => ({ root: style(theme) }) : { root: style };
      return withStyles(styles, options)(StyledComponent);
    };
  }

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #f44336 30%, #f44336 90%)',
    borderRadius: 120,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontWeight:'800',
    display: 'flex', justifyContent: 'center', 
    boxShadow: '0 3px 5px 2px rgba(	154, 162, 161, .3)',
  });
// MAterial-ui button
function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <div style={{width:"100px",float:"right",marginRight:'20px'}}>
      <Link to={`/table`}>
        <MyButton variant="contained" className={classes.button} id="mybutton" >
          Add+
        </MyButton>
        </Link>

      </div>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);