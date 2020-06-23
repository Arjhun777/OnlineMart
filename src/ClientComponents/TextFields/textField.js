import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Icon from '@material-ui/core/Icon';
import Button from '../../AdminComponents/Button/SubmitButton'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color:'#4f5864'
  },

});

// ------------------------------Quantity number box to buy product------------
class DatePickers extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[],
            myCart:[],
            quantity:1
        }
    }

    componentWillMount(){
        const cart=JSON.parse(localStorage.getItem('cart'));
        this.setState({
            myCart:cart
        })
    }
    handleChange=(event)=>{
        this.setState({
            quantity:event.target.value
        })
    }
    handleSubmit=()=>{
        const ind=this.props.index;
        const data=this.props.datas;
        const cart=JSON.parse(localStorage.getItem('cart'));
        const carts=[];
        if(cart!=''){
            let check=true;
        for(let i=0;i<cart.length;i++){
             if(cart[i][1].name==data.name&&cart[i][1].category==data.category&&cart[i][1].price==data.price){
                // const qua=cart[i][2];
                var toNum = parseInt(this.state.quantity, 10);
                const val=toNum;
                carts.push(ind,data,val);
                cart[i]=carts
                check=false;
                break;
            }
        }
        if(check){
            carts.push(ind,data,this.state.quantity);
            cart.push(carts);
        }
        check=true;
        }
        else{
        carts.push(ind,data,this.state.quantity);
        cart.push(carts);
        }
        localStorage.setItem('cart',JSON.stringify(cart));
        this.setState({
            cart:[],    
            quantity:1,
        })
        let event = new Event('storageChange');
        window.dispatchEvent(event);
    }
    
render(){
  const { classes } = this.props;
  return (
    <form className={classes.container}  noValidate autoComplete="off"> 
    <ValidatorForm className="container" 
        
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
     <TextValidator
        id="date"
        label="Qty"
        type="number"
        name="quantity"
        onChange={this.handleChange}
        value={this.state.quantity}
        className={classes.textField}
        validators={['required','isPositive','minNumber:1',`maxNumber:${this.props.datas.quantity}`]}
        errorMessages={['This field is required',"Positive Numbers only",'Atleast one quantity required',"Max limit of stock reached"]}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button id="cart-btn" type='submit' flt={'right'} top={'-40px'}name={<Icon style={{color:"white"}} id="cart">shopping_cart</Icon>} clr={"#232f3e"}></Button>
    </ValidatorForm>
    </form>
    
  );
}
}
DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);