import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Masterclass</div>
        <input type='text' placeholder='Search' className='search-input' />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">At Work</a></li>
          <li><a href="#">View Plans</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <button className='signup'>Sign Up</button>
      </nav>
      <div className="mobile-nav">
        <button>Menu</button>
      </div>
    </header>
  );
};

export default Header;
