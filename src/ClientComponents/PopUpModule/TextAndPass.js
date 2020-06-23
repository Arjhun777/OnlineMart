import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  TextValidator} from 'react-material-ui-form-validator';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

// ----------------Textbox for username and password for netbanking------------
class FilledTextFields extends React.Component {
  state = {
    username:'',
    password:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    if(name=='username'){
        this.props.paymentnet.username=event.target.value
    }
    else{
        this.props.paymentnet.password=event.target.value
    }
  };

  render() {
    const { classes } = this.props;
    return(
        <TextValidator
            id="outlined-name"
            type={this.props.type}
            name={this.props.label}
            label={this.props.label}
            className={classes.textField}
            value={this.state[this.props.label]}
            onChange={this.handleChange(this.props.label)}
            margin="normal"
            validators={['required']} 
            errorMessages={['This field is required']}
            />
        )
     }
  }

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FilledTextFields);