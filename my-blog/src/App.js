import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
      <Router>
      <div className="App">
        <Header />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/About'} component={About} />
          <Route exact path={process.env.PUBLIC_URL + '/Resume'}component={Resume} />
          <Route exact path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />
          <Route exact path={process.env.PUBLIC_URL + '/HolisticProject'} component={HolisticProject} />
      </div>
      </Router>
    );
  }
}

export default App;
