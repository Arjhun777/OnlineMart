import React,{ Component } from 'react';
import SimpleAppBar from '../../AdminComponents/Navbar/Navbar';
import Login from './Login'

// main login page which call login as component
class LoginPage extends Component{
    render(){
        return(
            <div>
                <SimpleAppBar/>
                <Login/>
            </div>
        )
    }
}
export default LoginPage;