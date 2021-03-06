import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


const Navbar = ({icon, title}) => {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} />     
          <span>{title}</span>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
     </nav>
  )
  
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: 'fab fa-github'
  };


  Navbar.propTypes = {
      title: PropTypes.string,
      icon: PropTypes.string
  };

export default Navbar
