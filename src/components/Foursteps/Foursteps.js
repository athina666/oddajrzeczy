import React, { Component } from 'react';
import './FourSteps.css';
import {Link} from 'react-router-dom';

class FourSteps extends Component {
    render() {
        return(
            <div className="four_steps_container">
                <h1>Wystarcza 4 proste kroki</h1>
                <div className="decoration_main_section"></div>
                    <div className="main_section">
                    <div className="main_section_elements">
                    <div className="main_section_elements_icon"></div>
                        <span>Wybierz rzeczy</span>
                        <p>Ubrania,zabawki,sprzet i inne</p>
                    </div>
                    <div className="main_section_elements">
                    <div className="main_section_elements_icon"></div>
                        <span>Spakuje je</span>
                        <p>Skorzystaj z workow na smieci</p>
                    </div>
                    <div className="main_section_elements">
                    <div className="main_section_elements_icon"></div>
                        <span>Zdecyduj komu chcesz pomoc</span>
                        <p>Wybierz zaufane miejsce</p>
                    </div>
                    <div className="main_section_elements">
                        <div className="main_section_elements_icon"></div>
                        <span>Zamow kuriera</span>
                        <p>Kurier przjedzie w dogodnym terminie</p>
                    </div>
                    </div>
                    <Link to="/sign-in" className="link_sign_in">
                        Zaloz konto
                    </Link>
            </div>
        );
    }

}

export default FourSteps;