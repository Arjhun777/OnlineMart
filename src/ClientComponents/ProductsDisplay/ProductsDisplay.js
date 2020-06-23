import React ,{Component} from 'react';
import ContainedButtons from '../../AdminComponents/Button/SubmitButton'
import DisplayPage from '../DisplayPage/DisplayPage'
import { BrowserRouter as Router ,Route,NavLink} from 'react-router-dom'

// --------------------Main page to display the products to client
class ProductsDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            category:[]
        }
    }
    componentWillMount(){
        const users=JSON.parse(localStorage.getItem('user'));
        const cate=[];
        for(let i in users){
            cate.push(i);
        }
        this.setState({
            user:users,
            category:cate
        })
    }
    render(){
        return(
            <Router>
                <div>
                <h3>Products</h3>
                {this.state.category.map((data,index)=>(
                <NavLink  to={this.state.category[index]}><ContainedButtons flt={'left'}  clr={'#546E7A'} textcolor={"white"} name={this.state.category[index] }/></NavLink> 
                ))}<br/><br/><br/>
                <h6>select your product</h6>
                    <Route exact path="/all" component = {DisplayPage} />
                    <Route exact path="/Shoes" component = {DisplayPage} />
                    <Route exact path="/Watches" component = {DisplayPage} />
                    <Route exact path="/TShirt" component = {DisplayPage} />
                    <Route exact path="/Mobile" component = {DisplayPage} />
                </div>
            </Router>
        )
    }
}

export default ProductsDisplay;