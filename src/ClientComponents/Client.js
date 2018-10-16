import React,{ Component } from 'react';
import Navbar from '../AdminComponents/Navbar/Navbar';
import Dashboard from './Container/Container';
import ProductsDisplay from './ProductsDisplay/ProductsDisplay'
import DisplayPage from './DisplayPage/DisplayPage'

class Client extends Component{
    render(){
    const product=<ProductsDisplay/>
        return(
            <div>
                <Navbar/>
                <Dashboard lg={8} md={8} sm={8} xs={12} product={product} isValid={true}/>
            </div>
        )
    }
}

export default Client;