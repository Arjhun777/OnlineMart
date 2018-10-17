import React from 'react';
import { Link } from 'react-router-dom';
import ContainedButtons from '../../AdminComponents/Button/SubmitButton'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
//   login page validator
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'codingmart',
            password:'codingmart',
            user:'',
            pass:'',
            valid:false
        }
    }
    handleChange=name=>event =>{
        this.setState({
            [name]:event.target.value
        })
    }
    handleSubmit=()=>{
        const user=[]
        localStorage.setItem('login',JSON.stringify(user))
        if(this.state.user==this.state.username&&this.state.pass==this.state.password){
            this.setState({
                valid:true
            })
            localStorage.setItem('login',JSON.stringify(true))
            window.location.pathname="/admin"            
        }
        else{
            localStorage.setItem('login',JSON.stringify(this.state.valid))
            alert("wrong username or password");
        }
        
    }
render() {
    return (
      <div >
      <form className={styles.container} className="whole-admin-div" noValidate autoComplete="off">
      <ValidatorForm className="container cont"
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
            <h4>Enter to Login</h4>
        <TextValidator
          id="admin-user"
          name="name"
          label="Name"
          className={styles.textField}
          value={this.state.user}
          onChange={this.handleChange('user')}
          margin="normal"
          validators={['required']} 
          errorMessages={['This field is required']}
        />
        <TextValidator
          id="admin-pass"
          name="name"
          label="password"
          type="password"
          className={styles.textField}
          value={this.state.pass}
          onChange={this.handleChange('pass')}
          margin="normal"
          validators={['required']} 
          errorMessages={['This field is required']}
        /><br/>
        <ContainedButtons type="submit" clr={"orange"} name={"Login"}></ContainedButtons>
        </ValidatorForm>
        </form>
        </div>
    )
}
}

export default Login;