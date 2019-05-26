import React, {Component} from 'react';
import './YellowSection.css'

function YellowSection (props) {
    return (
        <div className="yellow_section_container">
           <div className="yellow_section_container_element">
                <span className="span_number">10</span>
                <span className="span_text">Oddanych workow</span>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.</p>
           </div>

           <div className="yellow_section_container_element">
                <span className="span_number">5</span>
                <span className="span_text">Wspartych organizacji</span>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.</p>
           </div>

           <div className="yellow_section_container_element">
                <span className="span_number">7</span>
                <span className="span_text">Zorganizowanych zbiorek</span>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.</p>
           </div>

        </div>
    );
}

export default YellowSection;