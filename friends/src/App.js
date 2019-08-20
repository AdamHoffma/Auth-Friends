import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import Friends from './components/Friends'

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/protected">Friends</Link>
      <Route path="/login" component={Login}/>
      <PrivateRoute exact path='/protected' component={Friends}/>
    </div>
    </Router>
  );
}

export default App;
