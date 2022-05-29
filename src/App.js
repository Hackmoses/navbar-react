import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import ContactUs from './components/pages/ContactUs';
import Gynacology from './components/pages/Gynacology';
import Surgery from './components/pages/Surgery';
import CallNow from './components/pages/CallNow';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/Doctors' component={Doctors} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/call-now' component={CallNow} />
        <Route path='/Surgery' component={Surgery} />
        <Route path='/Gynacology' component={Gynacology} />
      </Switch>
    </Router>
  );
}

export default App;
