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
    componentWillMount(){
        const user=JSON.parse(localStorage.getItem('user'));
        const urlVal=window.location.pathname.slice(1);
        const userCate=user[urlVal]
        this.setState({
            user:user,
            value:userCate
        })
    }
    render(){
        return(
            <div>
                <Container lg={12} md={12} sm={12} xs={12} valid={true} value={this.state.value}/>
            </div>
        ) 
    }
}
export default DisplayPage;