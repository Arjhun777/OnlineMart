import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Navbar from '../../AdminComponents/Navbar/Navbar';
import ContainedButtons from '../../AdminComponents/Button/SubmitButton'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import RadioButton from './RadioButtons'

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

const currencies = [
  {
    index:0,
    label: 'TamilNadu',
    value:'TamilNadu'
  },
  {
    index:1,
    label: 'karnataka',
    value:'karnataka'
  },

];
const districts = {
  "TamilNadu": [
    {
      index:0,
      label:'Chennai',
      value:'Chennai'
    },
    {
      index:1,
      label:'Erode',
      value:'Erode'
    },
    {
      index:2,
      label:'Salem',
      value:'Salem'
    }
  ],
  "karnataka": [
    {
      index:0,
      label:'Bangalour',
      value:'Bangalour'
    }
  ]
}


// ---------------------------Total form validataion for user details for billing----------
class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details:{
        name:'',
        phonenumber:'',
        email:'',
        statename:'',
        district:'',
        city:'',
        street:'',
        tod:''
      },
      paymentcod:{
        fromdate:'',
        todate:''
      },
      paymentcard:{
        expirationdate:'',
        cardnumber:''
      },
      paymentnet:{
        username:'',
        password:'',
      },
      districts: [],valid:true
  }
  };

  componentDidMount(){
    const detail=JSON.parse(localStorage.getItem('details'));
    if(detail==null){
      const details=[]
      localStorage.setItem('details',JSON.stringify(details));
    }
    const paymentdetail=JSON.parse(localStorage.getItem('userdetails'));
    if(paymentdetail==null){
      const userdetails=[];
      localStorage.setItem('userdetails',JSON.stringify(userdetails))
    }
  }
  handleChange = (name)  => event => {
    const details={...this.state.details}
    details[name]=event.target.value;
    this.setState({
        details:details
    });
    console.log(this.state)
  };
  onStateChange = name => event => {
    const details={...this.state.details}
    details[name]=event.target.value;
    let temp = districts[event.target.value].slice()
    this.setState({
      details:details,
      districts: temp
    });
  }
  handleSubmit=()=>{
    let detail=JSON.parse(localStorage.getItem('details'));
    detail=this.state.details;
    localStorage.setItem('details',JSON.stringify(detail));
    let cart=JSON.parse(localStorage.getItem('cart'));
    let user=JSON.parse(localStorage.getItem('user'));
    if(cart.length!=0){
      if(this.state.details.tod.length!=0){
        cart.map((data,index)=>(
        <span>
          {user[data[1].category][data[0]].quantity=(data[1].quantity)-(data[2])}
          {localStorage.setItem('user',JSON.stringify(user))}
        </span>
      ))
      window.location.pathname="/bill"
      }
      else{
            let event = new Event('errorCheck');
            window.dispatchEvent(event);
      }
    }
    else{
      alert("No products in the cart")
      window.location.pathname="/client"
      }
      
      const payment=JSON.parse(localStorage.getItem('userdetails'))
      if(this.state.details.tod=='COD'){
        payment.push(this.state.paymentcod)
        localStorage.setItem('userdetails',JSON.stringify(payment));
      }
      else if(this.state.details.tod=='Credit Card'){
        payment.push(this.state.paymentcard)
        localStorage.setItem('userdetails',JSON.stringify(payment));
      }
      else{
        payment.push(this.state.paymentnet)
        localStorage.setItem('userdetails',JSON.stringify(payment));
      }
      console.log(this.state.paymentnet.username)
  }


  tod=(data)=>{
    const details={...this.state.details}
    details.tod=data;
    this.setState({
      details:details
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar/>
      <form className={classes.container} noValidate autoComplete="off">
      <ValidatorForm className="container cont"
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
            <h4>Personal Details</h4>
        <TextValidator
          id="outlined-name"
          name="name"
          label="Name"
          className={classes.textField}
          value={this.state.details.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          validators={['required']} 
          errorMessages={['This field is required']}
        />
       
        <TextValidator
          id="outlined-name"
          label="E-mail"
          name="email"
          className={classes.textField}
          value={this.state.details.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
          validators={['required','isEmail']} 
          errorMessages={['This field is required',"Enter the valid Email"]}
        />

        <TextValidator
          id="outlined-required"
          label="Phone number"
          name='phnonenumber'
          className={classes.textField}
          value={this.state.details.phonenumber}
          onChange={this.handleChange('phonenumber')}
          margin="normal"
          variant="outlined"
          validators={['required','matchRegexp:^[\+]?[(]?[7-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$']} 
          errorMessages={['This field is required',"Enter the valid phone number"]}
        />
        <hr id="Hr"/>
        <h4>Address Details</h4>
        <TextValidator
          id="outlined-select-currency"
          select
          label="Select State"
          className={classes.textField}
          name="statename"
          value={this.state.details.statename}
          onChange={this.onStateChange('statename')}
          validators={['required']} 
          errorMessages={['This field is required']}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your category"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextValidator>
        <TextValidator
          id="outlined-select-currency dist"
          select
          label="Select District"
          className={classes.textField}
          name="district"
          value={this.state.details.district}
          onChange={this.handleChange('district')}
          validators={['required']} 
          errorMessages={['This field is required']}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your category"
          margin="normal"
          variant="outlined"
        >
           {this.state.districts.map(option => (
            <MenuItem key={option.index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextValidator>

        <TextValidator
          id="outlined-required"
          label="City"
          name='city'
          className={classes.textField}
          value={this.state.details.city}
          onChange={this.handleChange('city')}
          margin="normal"
          variant="outlined"
          validators={['required']} 
          errorMessages={['This field is required']}
        />
         <TextValidator
          id="outlined-required"
          label="Street"
          name='street'
          className={classes.textField}
          value={this.state.details.street}
          onChange={this.handleChange('street')}
          margin="normal"
          variant="outlined"
          validators={['required']} 
          errorMessages={['This field is required']}
        />
        <hr id="Hr"/>
        <RadioButton click={this.tod} error={this.state.valid} paymentcod={this.state.paymentcod} paymentcard={this.state.paymentcard} paymentnet={this.state.paymentnet}/>
          <Link to={`/client`}><ContainedButtons name={"close"} mycolor={"white"} flt={"left"}>close</ContainedButtons></Link>
          <ContainedButtons type={"submit"} name={"Submit"} mycolor={"secondary"} flt={"left"}>Submit</ContainedButtons>            
        </ValidatorForm>
      </form>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);