import React,{Component} from 'react';
//import Header from './components/Header/Header';
import './App.css';
//import YellowSection from './components/YellowSection/YellowSection'
//import AboutUs from './components/AboutUs/AboutUs';
import Nav from './components/Header/Nav';
import LogInSignIn from './components/Header/LogInSignIn';
import UnloggedView from './components/UnloggedView/UnloggedView';



class App extends Component {
  render() {
    return (
     <div>
        <LogInSignIn />
        <Nav />
        <UnloggedView />
     </div>
    );
  }
}

export default App;
