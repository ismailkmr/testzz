import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home'
import Navbar from './Navbar'
function App() {
  return (
    <>
    <Router>
        <div>
          <Navbar></Navbar>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
        </div>
        </Router>
    </>
  );
}

export default App;
