import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
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
