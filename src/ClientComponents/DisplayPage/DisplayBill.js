import React ,{Component}from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: `${theme.spacing.unit * 3}px`,
    },
    wrapper: {
      minWidth:'100%',
      maxWidth:'100%',
    },
   paper: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit * 2,
    },
  });

//   This will display the bill
class DisplayBills extends Component{
    constructor(props){
        super(props);
        this.state={
            details:{},
            cart:{},
            total:'',
            userDetails:{},
            valid:false
        }
    }
    componentWillMount(){
        const value=JSON.parse(localStorage.getItem('details'))
        let cart=JSON.parse(localStorage.getItem('cart'))
        if(value.tod=='COD'){
        const userdetails=JSON.parse(localStorage.getItem('userdetails'))
        this.setState({
            userDetails:userdetails,
            valid:true
        })
        }
        let total=0;
        cart.map((data)=>(
            <span>
                {total=total+(data[1].price*data[2])}
            </span>
        ))
        this.setState({
            details:value,
            cart:cart,
            total:total
        })
        cart=[];
        localStorage.setItem('cart',JSON.stringify(cart));    
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
            <Grid container spacing={24}>
                <Grid item lg={8} md={8} sm={12} xs={12} >
                    <Paper className="paper" id="printarea">
                    <h2 id="h2">Online-Mart</h2>
                    <hr id="Hr"/>

                        <h4 className="h4">Billing Details </h4>
                        <hr id="Hr"/>
                            <h6 className="h6">Name : {this.state.details.name}</h6>
                            <h6 className="h6">Payment Method : {this.state.details.tod}</h6>
                            {/* {this.state.valid?<h6 className="h6">Delivery date : {this.state.userDetails[0].fromdate} - {this.state.userDetails[0].todate}</h6>:null} */}
                        <hr id="Hr"/>
                        <h4 className="h4">Shipping Address</h4>
                        <hr id="Hr"/>
                            <h5>Address: <h6 className="h6">{this.state.details.street},
                                {this.state.details.city},
                                {this.state.details.district},
                                {this.state.details.statename},
                                India</h6>
                            </h5>
                            <h5>Contact Details : <h6 className="h6">{this.state.details.phonenumber}</h6></h5>
                        <hr id="Hr"/>
                        <h4 className="h4">Products Details</h4>
                            
                                <span>
                                    <table id="mytab" cellPadding="10"  align="center">
                                        <thead>
                                            <tr id="myTr">
                                                <th>Product </th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {this.state.cart.map((data,index) => (
                                                    <tr id="myTr">
                                                        <td>{data[1].name}</td>
                                                        <td>{data[2]}</td>
                                                        <td>{data[2]*data[1].price}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table><br/>
                                    <h5>Total Amount : {this.state.total}</h5>
                                    <a id="table-a" onClick={()=>window.print()} class="btn btn-success btn-lg">
                                    <span class="glyphicon glyphicon-print"></span> Print</a>
                                </span>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default DisplayBills;