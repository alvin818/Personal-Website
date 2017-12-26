import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { HashRouter } from 'react-router-dom';
// Components
import Header from './components/headerComponent/header';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import HolisticProject from './components/pages/HolisticProject';
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path='/HolisticProject' component={HolisticProject} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
