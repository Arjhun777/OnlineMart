import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, browserHistory, IndexRoute } from 'react-router'
import Admin from "./main";
import Client from './ClientComponents/Client';
import {Route} from 'react-router-dom';
import OutlinedTextFields from './AdminComponents/Form/Form'
import PopUp from './ClientComponents/PopUpModule/PopUp'

const routes = (
    <Switch>
        <Route exact path = "/table/:name/:category" component = {OutlinedTextFields} />
        <Route exact path="/table" component = {OutlinedTextFields} />
        <Route exact path="/userdetails" component={PopUp}/>
        <Route exact path="/" component = {Admin} />
        <Route exact path="/client" component = {Client} />
    </Switch>
  );
export default routes;