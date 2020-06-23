import React ,{Component} from 'react';
import Navbar from '../../AdminComponents/Navbar/Navbar'
import DisplayBill from './DisplayBill'

// Main component for bill generation
class BillGeneration extends Component{
    render(){
        return(
            <div>
            <Navbar/>
                <div className="container">
                    <DisplayBill/>
                </div>
            </div>
        )
    }
}

export default BillGeneration;