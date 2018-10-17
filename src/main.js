import React,{ Component } from 'react';
import SimpleAppBar from './AdminComponents/Navbar/Navbar';
import ContainedButtons from './AdminComponents/Button/Button';
import SimpleTable from './AdminComponents/Table/Table';


// -------------------Main admin component------------------
class Admin extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <span>
                <SimpleAppBar/>
                <div className="container">
                <ContainedButtons/>
                <SimpleTable/>
                </div>
            </span>
        )
    }
}


export default Admin;