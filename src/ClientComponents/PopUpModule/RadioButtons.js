import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Pickers from './Pickers';
import DatePicker from './DatePicker';
import TextFields from './TextField';
import TextAndPass from './TextAndPass';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

// -----------radio button component the Cod , creditcard, netBanking
class RadioButtonsGroup extends React.Component {
  state = {
    value: '',valid:false,
    cod:false,
    card:false,
    net:false
  };


  componentDidMount(){
    const th=this;
    window.addEventListener('errorCheck', function(e) {  
        th.setState({
          valid:th.props.error,
        })
    });
};
  handleChange = event => {
      const val=event.target.value;
      this.setState({ 
        value: event.target.value ,valid:false,
        cod:false,
        card:false,
        net:false
      });
      if(event.target.value=="COD"){
        this.setState({ 
          value: event.target.value ,
          cod:true,
        });
      }
      else if(event.target.value=="Credit Card"){
        this.setState({ 
          value: event.target.value ,
          card:true,
        });
      }
      else if(event.target.value=="NetBanking"){
        this.setState({ 
          value: event.target.value ,
          net:true,
        });
      }
      this.props.click(val);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Transaction Type</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
          
          {this.state.valid?<span id="todError" style={{color:'red'}}>Select the transaction type</span>:null}
            
            <FormControlLabel  value={"COD"}  control={<Radio />} label="COD(Cash on delivery)" />
              {this.state.cod?<span>
                <Pickers TimeLable={"From Time"}  paymentcod={this.props.paymentcod}/>
                <Pickers TimeLable={"To Time"}  paymentcod={this.props.paymentcod}/>
              </span>:null}
            <FormControlLabel  value={"Credit Card"}  control={<Radio />} label="CreditCard/Debit Card" />
              {this.state.card?<span>
                <DatePicker paymentcard={this.props.paymentcard}/>
                  <TextFields mysub={this.props.mysubmit} paymentcard={this.props.paymentcard}/>
              </span>:null}
              <FormControlLabel  value={"NetBanking"}  control={<Radio />} label="NetBanking" />
              {this.state.net?<span>
                  <TextAndPass type={"text"} label={"username"} paymentnet={this.props.paymentnet}/>
                  <TextAndPass type={"password"} label={"password"} paymentnet={this.props.paymentnet}/>
              </span>:null}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);