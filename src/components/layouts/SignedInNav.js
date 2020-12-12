import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../icons/online-shop.png';
import wishlistIcon from '../../icons/favorite.png';

const SignedInNav = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {/* <li>
        <NavLink to="/create">New Project</NavLink>
      </li> */}
      <li className="icons">
        <NavLink to="/">
          <img src={cartIcon} alt="" />
        </NavLink>
      </li>
      <li className="icons">
        <NavLink exact to="/wishes">
          <img src={wishlistIcon} alt="" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInNav;
