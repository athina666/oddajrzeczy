import React, { Component} from 'react';
import './OurOrganizations.css';
import {Link} from 'react-router-dom';

class OurOrganizations extends Component {
    render() {
        return(
            <div>
                <h1>Komu pomagamy</h1>
                <div className="decoration"></div>
                <div className="organizations_container">
                <p>Bacon ipsum dolor amet short ribs brisket venison rump
                    drumstick pig sausage prosciutto chicken spare ribs 
                    salami picanha doner.
                </p>
                    <Link>Fundacjom</Link>
                    <Link>Organizacjom pozarzadowym</Link>
                    <Link>Lokalnym zbiorkom</Link>
                </div>
            </div>
        );
    }
}

export default OurOrganizations;