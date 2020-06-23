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

// ---------Time Picker for Cash on delivery -------
class TimePickers extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    handleChange= name => event =>{
        this.setState({
            data:event.target.value
        })
        if(name=="From Time"){
            this.props.paymentcod.fromdate=event.target.value
        }
        else{
            this.props.paymentcod.todate=event.target.value
        }
    }
    render(){
    const { classes } = this.props;

    return (
        <TextField 
            id="time"
            required
            label={this.props.TimeLable}
            type="time"
            onChange={this.handleChange(this.props.TimeLable)}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            inputProps={{
            step: 300, // 5 min
            }}
        />
    );
    }
    }

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);