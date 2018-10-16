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
      districts: []
  }
  };

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
    const detail=JSON.parse(localStorage.getItem('details'));
    if(detail==null){
      const details=[]
      localStorage.setItem('details',JSON.stringify(details));
    }
    detail.push(this.state.details);
    localStorage.setItem('details',JSON.stringify(detail));
    window.location.pathname="/client"
  }
  tod=(data)=>{
    const details={...this.state.details}
    details.tod=data;
    alert();
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
        <RadioButton click={this.tod}/>
          <Link to={`/client`}><ContainedButtons name={"close"} mycolor={"secondary"} flt={"left"}>close</ContainedButtons></Link>
          <ContainedButtons type={"submit"} name={"Submit"} mycolor={"#7953d2"} flt={"left"}>Submit</ContainedButtons>            
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