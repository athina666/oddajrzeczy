import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
      return (
       <div className="header_container">

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
      );
    }
  }

 



  export default Header; 

 