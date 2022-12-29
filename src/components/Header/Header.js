import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';


const Header = () => {
  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.gmail.com">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="www"><span className='category'>KDRAMA</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www"><span className='category'>KPOP</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.gmail.com"><span className='category'>MARVEL</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.gmail.com"><span className='category'>TECH</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;