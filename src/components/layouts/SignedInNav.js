import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../icons/online-shop.png';
import wishlistIcon from '../../icons/favorite.png';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInNav = (props) => {
  return (
    <>
      <li>
        <NavLink to="/">
          <i class="material-icons">add_shopping_cart</i>
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/wishes">
          <i class="material-icons">favorite</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInNav);
