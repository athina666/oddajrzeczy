import React, { Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';




class Header extends Component {
    render() {
        return(
                <div className="header_container">
                        <div className="log_in_container">

                                <Link to="/log-in" className="link_button">Zaloguj sie</Link>
                                <Link to="/sign-in" className="link_button">Zaloz konto</Link>
                                <Link to="/" className="link_button">Home</Link>
                        </div>

                        <div>
                            <ul className="nav_container">
                                <li>Start</li>
                                <li>O co chodzi</li>
                                <li>O nas</li>
                                <li>Fundacje i organizacje</li>
                                <li>Kontakt</li>
                            </ul>
                        </div>

                      
               </div>
        );
    }
}

export default Header;