import React ,{Component}from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartManage from '../CartManage/CartManage'
import Icon from '@material-ui/core/Icon';

class Inventory extends Component{
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