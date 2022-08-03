import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className='navbar-end'>

          <Link to='/' className='navbar-item'>All Movies</Link>
          <Link to='/add' className='navbar-item'>Add New</Link>
          
      </nav>

      
    </>
  );
};

export default Nav;