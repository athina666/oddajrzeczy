import React, { Component } from 'react';
import './SignLogInForm.css';
import {Link} from 'react-router-dom';

class LogInForm extends Component {
    render() {
        return (
           <div className="log_in_form_container">

                <form className="log_in_form">

                <h1 className="log_in_form_container">Zaloguj sie</h1>
                <div className="decoration_log_in"></div>

                    <label>
                        Email:
                        <input type="text" email="email" />
                    </label> 

                    <label>
                        Haslo:
                        <input type="text" password="password" />
                    </label>

                    <Link to="/" />

        
          </form>
           </div>
        );
    }
}

export default LogInForm;

