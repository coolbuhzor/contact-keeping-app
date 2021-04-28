import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

//the proptype below is to define the type of props that we are using in this component..
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

// this is the default prop for this component
Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-address-book',
  //   icon: 'fas fa-id-card-alt',
};
