import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink,Switch} from 'react-router-dom';
import LogInForm from '../pages/LogInForm';
import SignForm from '../pages/SignForm';




class LogInSignIn extends Component {
    render() {
      return (
       <BrowserRouter className="header_container">

          <div className="log_in_container">

                  <NavLink to="log-in">Zaloguj sie</NavLink>
                  <NavLink to="sign-in">Zaloz konto</NavLink>
                  <NavLink to="/">Home</NavLink>
              
                 <switch>
                 
                    <Route path="/log-in" component={LogInForm}></Route>
                    <Route path="/sign-in" component={SignForm}></Route>
                    {/* <Route component={Error} /> */}
                 </switch>
              
          </div>
        </BrowserRouter>
         );
  } }

  export default LogInSignIn;