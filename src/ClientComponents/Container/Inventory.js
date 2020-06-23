import React ,{Component}from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartManage from '../CartManage/CartManage'
import Icon from '@material-ui/core/Icon';

// ---------Inventory which will call cartManagement
class Inventory extends Component{
    componentWillMount(){
        const cart=JSON.parse(localStorage.getItem('details'));
        if(cart==null){
            const cart=[];
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    }
    render(){
        console.log(this.props.Paper);
        return(
            <Grid item lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
                <Paper style={{overflow:'scroll'}} className={this.props.Paper} id="cart-head">CART<Icon id="cart">shopping_cart</Icon><CartManage/></Paper>
            </Grid>
        )
    }
}

export default Inventory;