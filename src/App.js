import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Calendar from './components/pages/Calendar/Calendar';
import Contact from './components/pages/Contact/Contact';
import SchoolLife from './components/pages/SchoolLife/SchoolLife';
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css"
const App=()=>{
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Router>
                    <div>
                    <Header/>
                    <header/>
                        <SignIn/>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home/about" exact component={About} />
                            <Route path="/home/calendar" exact component={Calendar} />
                            <Route path="/home/contact" exact component={Contact} />
                            <Route path="/home/schoollife" exact component={SchoolLife}/>
                            <Route path="home/signup" exact component={SignUp}/>
                            <Route path="home/signin" exact component={SignIn}/>
                        </Switch>
                    </div>
                </Router>
            </div>
            <Footer/>
        </div>
    );
}
export default App;