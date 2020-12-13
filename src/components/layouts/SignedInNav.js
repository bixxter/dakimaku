import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../icons/online-shop.png';
import wishlistIcon from '../../icons/favorite.png';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInNav = (props) => {
  return (
    <>
      <li><NavLink to="/create">New Pillow</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li className="icons"><NavLink to="/cart"><img src={cartIcon} alt="" /></NavLink></li>
      <li className="icons"><NavLink exact to="/wishes"><img src={wishlistIcon} alt="" /></NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return{
      signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNav)
