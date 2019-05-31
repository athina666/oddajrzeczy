import React, { Component } from 'react';
import './FirstSection.css';

class FirstSection extends Component {
    render(){
        return(
            
       <div className="home_container">
                <div className="home_container_img">

                    <div className="header_container_right">
                      <span className="span_header">Zacznij pomagac!</span>
                        <br></br> 
                          <span className="span_header">Oddaj niechane rzeczy w zaufane rece.</span>
                          <div className="decoration"></div>
                            <div className="button_container">
                                <div className="right_button">Oddaj rzeczy</div>
                                <div className="left_button">Zorganizuj zbiorke</div>
                            </div>
                   </div>
          </div>
       </div>
        );
    } 
} 

export default FirstSection;
