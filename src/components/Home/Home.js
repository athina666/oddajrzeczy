import React, { Component } from 'react';
import YellowSection from '../YellowSection/YellowSection'
import AboutUs from '../AboutUs/AboutUs';
import FourSteps from'../Foursteps/Foursteps';
import OurOrganizations from '../OurOrganizations/OurOrganizations';
import FirstSection from '../FirstSection/FirstSection';


class Home extends Component {
    render() {
      return (
      <div>
              <FirstSection />
              <YellowSection />
              <FourSteps />
              <AboutUs />
              <OurOrganizations />
                
        
      </div>
       
      );
    }
  }

 



  export default Home; 

 