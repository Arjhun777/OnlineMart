import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, browserHistory, IndexRoute } from 'react-router'
import Admin from "./main";
import Client from './ClientComponents/Client';
import {Route} from 'react-router-dom';
import OutlinedTextFields from './AdminComponents/Form/Form'
import PopUp from './ClientComponents/PopUpModule/PopUp'
import BillGeneration from './ClientComponents/DisplayPage/BillGeneration'
import LoginPage from './AdminComponents/LoginPage/LoginPage'



// -------------------router to switch between pages-----------------
function validCheck(){
    const val=JSON.parse(localStorage.getItem('login'))
    return(
        val
    )
}
function productsAvailable(){
    const user=JSON.parse(localStorage.getItem('user'))
    let valid=false;
    if(user!=null){
        valid=true
    }
    return(
        valid
    )
}
const routes = (
    <Switch>
        <Route exact path = "/table/:name/:category" component = {OutlinedTextFields} />
        <Route exact path="/table" component = {OutlinedTextFields} />
        <Route exact path="/userdetails" component={PopUp}/>
        <Route exact path="/bill" component={BillGeneration}/>
        {validCheck()?<Route exact path="/admin" component = {Admin} />:null}
        <Route exact path="/" component = {LoginPage} />
        {productsAvailable()?<Route exact path="/client" component = {Client} />:alert("There are no products...Sorry")}
    </Switch>
  );
export default routes;