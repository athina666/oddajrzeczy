import React,{Component} from 'react';
import './App.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import SignForm from './components/pages/SignForm';
import LogInForm from './components/pages/LogInForm';

import Header from './components/Header';
import Home from './components/Header/Home';


{/* <LogInSignIn />
<Nav />
<UnloggedView /> */}

class App extends Component {
  render() {
    return (
      <BrowserRouter className="header_container">
            <Header />
             <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/log-in" component={LogInForm}></Route>
                <Route exact path="/sign-in" component={SignForm}></Route>
                {/* <Route component={Error} /> */}
                
             </Switch>
    
          
    </BrowserRouter>
    );
  }
}

export default App;
