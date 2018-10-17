import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
});
// Date picker for creditcard transaction Material-ui
class DatePickers extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            data:event.target.value
        })
        this.props.paymentcard.expirationdate=event.target.value;
    }
    render(){
    const { classes } = this.props;
    return (
        <TextField
        required
            id="date"
            label="Expiration date"
            type="date"
            onChange={classes.handleChange}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
    )
    }
    }
DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);