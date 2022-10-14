import logo from './logo.svg';
import './login.css';
import './style.scss'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPrint } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [style, setStyle] = useState("menu");
  return (    
<div className="App"> 
 <h2>Welcome123</h2>
</div>
  );
}

export default Home;