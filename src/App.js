import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Calender from './components/pages/Calender/Calender';
import Contact from './components/pages/Contact/Contact';
import SchoolLife from './components/pages/SchoolLife/SchoolLife';
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";

const App=()=>{
    return (
        <div>
            <Router>
                <div>
                    <header/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home/about" exact component={About} />
                        <Route path="/home/calender" exact component={Calender} />
                        <Route path="/home/contact" exact component={Contact} />
                        <Route path="/home/schoollife" exact component={SchoolLife}/>
                        <Route path="home/signup" exact component={SignUp}/>
                        <Route path="home/login" exact component={Login}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default App;