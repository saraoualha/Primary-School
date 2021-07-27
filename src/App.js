import React from "react";
import {Router, Route, Switch} from 'react-router-dom';
import Home from '../components/pages/Home';

const App=()=>{
    return 
        (
           <div>
               <Router >
                   <div>
                       <header/>
                       <Switch>
                           <Route path="/" exact component={Home} />
                           <Route path="/home/about" exact component={About} />
                           <Route path="/home/calender" exact component={Calender} />
                           <Route path="/home/contact" exact component={Contact} />
                           <Route path="/home/schoollife" exact component={SchoolLife}/>
                       </Switch>
                   </div>
               </Router>
            </div>
        );
}
export default App;