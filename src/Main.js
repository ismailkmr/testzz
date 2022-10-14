import React from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
   <div>
   <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/home">Account</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      
      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/login" component={Login} />
   </div>
);

export default Main;
