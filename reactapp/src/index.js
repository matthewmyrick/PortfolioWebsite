import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Portfolio from './components/portfolio'
import Experience from './components/experience'
import Contact from './components/contact'


ReactDOM.render( 
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
,
  document.getElementById('root')
);