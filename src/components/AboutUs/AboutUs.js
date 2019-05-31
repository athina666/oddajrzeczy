import React from 'react';
import './AboutUs.css';


function AboutUs () {
    return(
    <div className="about_us_container">

        <div className="about_us_left_section">
            <span>O nas</span>
            <div className="decoration"></div>
            <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
                 Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage 
                 prosciutto chicken spare ribs salami picanha doner.
            </p>
        </div>

        <div className="about_us_right_section"></div>

    </div>
    );
}

export default AboutUs;