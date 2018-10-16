import React ,{Component} from 'react';
import ContainedButtons from '../../AdminComponents/Button/SubmitButton'
import DisplayPage from '../DisplayPage/DisplayPage'
import { BrowserRouter as Router ,Route,Link} from 'react-router-dom'


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
                {/* <Link to={`/`}><ContainedButtons name={this.state.category[0]}/></Link>
                <ContainedButtons name={this.state.category[1]}/>
                <ContainedButtons name={this.state.category[2]}/>
                <ContainedButtons name={this.state.category[3]}/><br/><br/><br/> */}
                {this.state.category.map((data,index)=>(
                    <Link to={this.state.category[index]}><ContainedButtons flt={'left'} name={this.state.category[index]}/></Link>                   
                ))}<br/><br/><br/>
                <h6>select your product</h6>
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