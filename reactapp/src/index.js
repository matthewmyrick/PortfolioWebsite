import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Portfolio from './components/portfolio'
import About from './components/about'
import Contact from './components/contact'


ReactDOM.render( 
  <React.StrictMode>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);