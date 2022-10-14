import logo from './logo.svg';
import './login.css';
import './style.scss'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPrint } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
function Login() {
  const [style, setStyle] = useState("menu");  
  const [gfg, setGfg] = useState("");
  const history = useHistory()
  const submit =()=>{
    history.push('/login')
    console.log('Hello OMA')
  }

  const Nav = () => (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );

  
const HomePage = () => <h1>Home Pagez</h1>;
const AboutPage = () => <h1>About Page</h1>;

  return (
    <>
    <div className='overlay'></div>
  <div id="login-area" className="container mt-5">
      <h1 className="title">My Bank Account</h1>
      <div className="submit-area">
      <Router>
        <div>
          <Nav />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />          
        </div>
      </Router>

        <h4 className="text-info mb-4 title02">LogIn</h4>
        <input
          type="email"
          placeholder="Enter Email"
          name=""
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name=""
          className="form-control"
        />
        <br />
        <Router>
        <Link to="/about">About</Link>  
        <Link to="/home">QQ </Link>
        <button id="logBtn" className="btn btn-info text-white">Submit</button>       
        </Router>
      </div>
    </div>
 </>
  );
}

export default Login;