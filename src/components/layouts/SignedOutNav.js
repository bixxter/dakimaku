import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutNav = () => {
  return (
    <>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/signin">Log In</NavLink></li>
    </>
  );
};
export default SignedOutNav;
