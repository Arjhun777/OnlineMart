import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '../../AdminComponents/Button/SubmitButton'
import { BrowserRouter as Router ,Route,Link} from 'react-router-dom'
import textField from '../TextFields/textField'

// total cart management
class CartManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost:0,
            cart: [],
            // valid:true
        }
    }
    getValue(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        let totalCost=0;
        cart.map((data)=>(
            totalCost=totalCost+(data[1].price*data[2])
        ))
        this.setState({
            cart: cart,
            totalCost:totalCost
        })
    }
    componentDidMount(){
        const th=this;
        window.addEventListener('storageChange', function(e) {  
            th.getValue();
        });
    };
    componentWillMount() {
       this.getValue();
    }
    deleteHandle=(index)=>{
        const cartcp=this.state.cart;
        let total=this.state.totalCost-(cartcp[index][1].price*cartcp[index][2]);
        cartcp.splice(index,1);
        this.setState({
            cart:cartcp,
            totalCost:total
        })
        localStorage.setItem('cart',JSON.stringify(cartcp))
    }
    // minusQuantity(data,index){
    //     let cart = JSON.parse(localStorage.getItem('cart'));
    //     let val=data[2]-1;
    //     if(val>=1){
    //     cart[index][2]=val;
    //     let totalCost=this.state.totalCost-(data[1].price)
    //     this.setState({
    //         cart:cart,
    //         totalCost:totalCost
    //     })
    //     localStorage.setItem('cart',JSON.stringify(cart))  
    // }      
    // }
    // plusQuantity(data,index){
    //     let cart = JSON.parse(localStorage.getItem('cart'));
    //     let val=data[2]+1;
    //     if(val<=cart[index][1].quantity){
    //     cart[index][2]=val;
    //     let totalCost=parseInt(this.state.totalCost)+parseInt(data[1].price)
    //     this.setState({
    //         cart:cart,
    //         totalCost:totalCost
    //     })
    //     localStorage.setItem('cart',JSON.stringify(cart)) }
    // }
    checkValid(){
        let valid=true;
        if(this.state.totalCost<=0){
            valid=false;
        }
        return(
            valid
        )
    }
    changeNum=(index)=>event=>{
        let val=event.target.value;
        let cart=[...this.state.cart]
        const qua=cart[index][1].quantity;
        if(parseInt(val)<=parseInt(qua) && parseInt(val)>0){
        cart[index][2]=val
        let total=val*parseInt(cart[index][1].price);
        this.setState({
            [cart]:val,
            totalCost:total
        })
    }
    }
    render() {
        return (
            <div id="cart-table-div">
                <table id="mytable">
                    <thead>
                        <tr id="td">
                            <th id="th">Product </th>
                            <th id="th">Quantity</th>
                            <th id="th">Price</th>
                            <th id="th">Total</th>
                            <th id="th">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.cart.map((data,index) => (
                                <tr>
                                    <td>{data[1].name}</td>
                                    <td><input type="number" onChange={this.changeNum(index)} style={{width:'50px'}} value={this.state.cart[index][2]}></input></td>
                                    <td>{data[1].price}</td>
                                    <td>{data[2]*data[1].price}</td>
                                    <td onClick={()=>this.deleteHandle(index)} ><DeleteIcon></DeleteIcon></td>
                                </tr>
                            ))}
                    </tbody>
                    
                </table>
                <h6 id="h6">Total:{this.state.totalCost}</h6>
                {this.checkValid()?<Link to={`/userdetails`}> <Button name={'Check Out'} flt={'right'} clr={'orange'}></Button></Link>:null}

            </div>
        )
    }
}

export default CartManage;