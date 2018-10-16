import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  mybtn:{
    float:'right'
  }
};
const theme = createMuiTheme({
    palette: {
      primary: {
          main:'#000070',
      },
    },
  });

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Online-Mart
            <Link to={`/`}><button className="navbar-btn">Admin</button></Link>
            <Link to={`/client`}><button className="navbar-btn">client</button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);