import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './components/About.js'; 
import Portfolio from './components/Portfolio.js'; 
import Contact from './components/Contact.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path="/" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">About</Link>
            <Link to="/Portfolio" className="item">Portfolio</Link>
            <Link to="/Contact" className="item">Contact</Link>
          </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
