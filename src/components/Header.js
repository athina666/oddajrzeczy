import React, { Component} from 'react';
import '../components/Header/Header.css';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div className="log_in_container">

              <Link to="/log-in">Zaloguj sie</Link>
              <Link to="/sign-in">Zaloz konto</Link>
              <Link to="/">Home</Link>

            </div>
        );
    }
}

export default Header;