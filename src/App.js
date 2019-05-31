import React,{Component} from 'react';
import './App.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import SignForm from './components/pages/SignForm';
import LogInForm from './components/pages/LogInForm';
import Header from './components/Header/Header';
import Home from './components/Home/Home';



class App extends Component {
  render() {
    return (
      <BrowserRouter className="header_container">
            <Header />
             <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/log-in" component={LogInForm}></Route>
                <Route exact path="/sign-in" component={SignForm}></Route>
                {/* <Route exact path="/foundations" component={Foundations}></Route>
                <Route exact path="/non-profit" component={Foundations}></Route> */}

                
                {/* <Route component={Error} /> */}
                
             </Switch>
    
          
    </BrowserRouter>
    );
  }
}

export default App;
