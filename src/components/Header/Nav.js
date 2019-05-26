import React, {Component} from 'react';
import './Header.css';


class Nav extends Component {
    render () {
        return (
        <div>
            <ul className="nav_container">
                <li>Start</li>
                <li>O co chodzi</li>
                <li>O nas</li>
                <li>Fundacje i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </div>
        );
    }
}

export default Nav;