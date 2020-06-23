import React ,{Component}from 'react';
import Container from '../Container/Container'

class DisplayPage extends Component{
    constructor(){
        super();
        this.state={
            user:{},
            value:{}
        }
    }
    // will set the values to send by props
    componentWillMount(){
        const user=JSON.parse(localStorage.getItem('user'));
        const urlVal=window.location.pathname.slice(1);
        const userCate=user[urlVal]
        this.setState({
            user:user,
            value:userCate
        })
    }

    // Main display Component to call the container where at the client side
    render(){
        return(
            <div>
                <Container lg={4} md={4} sm={12} xs={12} valid={true} value={this.state.value}/>
            </div>
        ) 
    }
}
export default DisplayPage;