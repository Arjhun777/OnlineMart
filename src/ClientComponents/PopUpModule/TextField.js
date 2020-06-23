import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

// -----------credit card transaction text box-------------------
class TextFields extends React.Component {
  state = {
    card:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.props.paymentcard.cardnumber=event.target.value;
  };
  
  render() {
    const { classes } = this.props;

    return (
            <TextValidator
                required
                id="standard-required"
                label={this.props.label}
                name="card"
                margin="normal"
                onChange={this.handleChange('card')}
                value={this.state.card}
                className={classes.textField}
                validators={['required']}
                errorMessages={['This field is required']}
                InputLabelProps={{
                shrink: true,
                }}
            />
    )
  }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TextFields);