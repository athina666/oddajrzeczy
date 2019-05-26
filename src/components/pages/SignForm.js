import React, { Component } from 'react';
import './SignForm.css';


class SignForm extends Component {
    render() {
        return (
           <div>
                <form className="log_in_form">
                    <label>
                        Email:
                        <input type="text" email="email" />
                    </label> 

                    <label>
                        Haslo:
                        <input type="text" password="password" />
                    </label>

                    <label>
                        Powtorz haslo:
                        <input type="text" password="password" />
                    </label>


            <input type="submit" value="Submit" />

        
          </form>
           </div>
        );
    }
}

export default SignForm;

