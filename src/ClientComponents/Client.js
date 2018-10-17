import React,{ Component } from 'react';
import Navbar from '../AdminComponents/Navbar/Navbar';
import Dashboard from './Container/Container';
import ProductsDisplay from './ProductsDisplay/ProductsDisplay'


// --------------parent component for Client------------------
class Client extends Component{
    render(){
    const product=<ProductsDisplay/>
        return(
            <div>
                <Navbar/>
                <Dashboard lg={8} md={8} sm={12} xs={12} product={product} isValid={true}/>
            </div>
        )
    }
}

export default Client;