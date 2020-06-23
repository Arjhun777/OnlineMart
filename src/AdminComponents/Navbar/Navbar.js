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
  },
  mycolor:{
    backgroundColor:'#232f3e'
  }
};
const theme = createMuiTheme({
    palette: {
      primary: {
          main:'#000070',
      },
    },
  });
  function logout(){
    localStorage.setItem('login',JSON.stringify(false))
    // window.location.reload();
    window.location.pathname="/" 
  }
  function login(){
    window.location.pathname="/" 
  }

// Navbar for the page
function SimpleAppBar(props) {
  const { classes } = props;
  const value=JSON.parse(localStorage.getItem('login'))
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.mycolor} id="NavBar-head">
        <Toolbar >
          <Typography variant="h5" color="inherit">
            Online-Mart
          </Typography>
          <Typography id="navbar-tool">
            {value?<Link to={`/admin`}><button className="navbar-btn">Admin</button></Link>:<Link to={`/`}><button className="navbar-btn">Admin</button></Link>}
            <Link to={`/client`}><button className="navbar-btn">Client</button></Link>
            <span className="vline"></span>
            {value?<button className="navbar-btn" onClick={logout}>Logout</button>:<button className="navbar-btn" onClick={login}>Login</button>}
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