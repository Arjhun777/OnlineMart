import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '../../AdminComponents/Button/SubmitButton'
import { BrowserRouter as Router ,Route,Link} from 'react-router-dom'

class CartManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost:0,
            cart: []
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
    handleSubmit=()=>{
        // this.state.cart;
    }
    
    render() {
        return (
            <div>
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
                                    <td>{data[2]}</td>
                                    <td>{data[1].price}</td>
                                    <td>{data[2]*data[1].price}</td>
                                    <td onClick={()=>this.deleteHandle(index)} ><DeleteIcon></DeleteIcon></td>
                                </tr>
                            ))}
                            <h6>Total:{this.state.totalCost}</h6>
                            <Link to={`/userdetails`}> <Button name={'Check Out'} flt={'right'} clr={'orange'}></Button></Link>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default CartManage;