import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ContainedButtons from '../Button/SubmitButton'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    label: 'Shoes',
    value:'Shoes'
  },
  {
    label: 'Watches',
    value:'Watches'
  },
  {
    label: 'TShirt',
    value:'TShirt'
  },
  {
    label: 'Mobile',
    value:'Mobile'
  },
];

// Form to add the product by admin
class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     Shoes:[],
     Watches:[],
     TShirt:[],
     Mobile:[],
      products:{
        category: '',
        name: '',
        price: '',
        quantity: '',
        description:''
      }
  }
  };

  componentDidMount(){
    const user={...JSON.parse(localStorage.getItem('user'))};
    if(user==null){
      const user={Shoes:[],Watches:[],TShirt:[],Mobile:[]};
    localStorage.setItem('user',JSON.stringify(user));
    }
    const urlVal=this.props.match.params.name;
    const cateVal=this.props.match.params.category;
    const data=JSON.parse(localStorage.getItem('user'));
    
    if(urlVal!=null){
      this.setState({
        products:{
        category:data[cateVal][urlVal].category,
        name:data[cateVal][urlVal].name,
        price:data[cateVal][urlVal].price,
        quantity:data[cateVal][urlVal].quantity,
        description:data[cateVal][urlVal].description
        }
      })
    }
  }

  handleChange = name  => event => {
    const product={...this.state.products}
    product[name]=event.target.value;
    this.setState({
      products:product
    });
  };
// submit the data to localstorage
  handleSubmit=()=>{
    const urlVal=this.props.match.params.name;
    const cateVal=this.props.match.params.category;
    const user={...JSON.parse(localStorage.getItem('user'))};
    if(urlVal==null){
    const value=this.state.products;
    const cate=this.state.products.category;
    this.setState({
      [cate]:value
    })
    user[cate].push(this.state.products)
     
    localStorage.setItem('user',JSON.stringify(user))
    this.setState({
      products:{
      category: '',
      name: '',
      price: '',
      quantity: '',
      description:''
      }
    })
    window.location.pathname="/"
  }
    else{
      user[cateVal][urlVal].category=this.state.products.category;
      user[cateVal][urlVal].name=this.state.products.name;
      user[cateVal][urlVal].price=this.state.products.price;
      user[cateVal][urlVal].quantity=this.state.products.quantity;
      user[cateVal][urlVal].description=this.state.products.description;
      localStorage.setItem('user',JSON.stringify(user));
      window.location.pathname="/"
    }
  }
// will validate the form
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
            <h3>Enter the product Details</h3>
       <TextValidator
          id="outlined-select-currency"
          select
          label="Select the Category"
          className={classes.textField}
          name="category"
          value={this.state.products.category}
          onChange={this.handleChange('category')}
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
          id="outlined-name"
          name="name"
          label="Product Name"
          className={classes.textField}
          value={this.state.products.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          validators={['required']} 
          errorMessages={['This field is required']}
        />
       
        <TextValidator
          id="outlined-name"
          label="Price"
          name="price"
          className={classes.textField}
          value={this.state.products.price}
          onChange={this.handleChange('price')}
          margin="normal"
          variant="outlined"
          validators={['required','isPositive','minNumber:1']} 
          errorMessages={['This field is required',"Positive Numbers required"]}
        />

        <TextValidator
          id="outlined-required"
          label="Quantity"
          name='quantity'
          className={classes.textField}
          value={this.state.products.quantity}
          onChange={this.handleChange('quantity')}
          margin="normal"
          variant="outlined"
          validators={['required','isPositive','minNumber:1']} 
          errorMessages={['This field is required',"Positive Numbers only",'Atleast one quantity required']}
        />

        <TextValidator
          id="outlined-name"
          label="Description"
          name='description'
          onChange={this.handleChange('description')}
          className={classes.textField}
          value={this.state.products.description}
          margin="normal"
          variant="outlined"
          validators={['required']}
          errorMessages={['This field is required']}
        />
          <ContainedButtons type={"submit"} name={"Submit"} mycolor={"secondary"} flt={"left"}>Submit</ContainedButtons>
          <Link to={`/`}><ContainedButtons name={"close"}  flt={"left"}>close</ContainedButtons></Link>
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