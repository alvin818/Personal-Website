import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        Alvin Vanegas
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            
            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
