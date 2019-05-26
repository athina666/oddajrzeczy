import React,{Component} from 'react';
import Header from '../Header/Header';
import YellowSection from '../YellowSection/YellowSection'
import AboutUs from '../AboutUs/AboutUs';



class UnloggedView extends Component {
  render() {
    return (
     <div>
        <Header />
        <YellowSection />
        <AboutUs />
     </div>
    );
  }
}

export default UnloggedView;