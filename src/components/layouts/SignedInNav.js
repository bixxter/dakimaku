import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInNav = (props) => {
  let history = useHistory();
  return (
    <>
      <li>
        <NavLink to="/cart">
          <i className="material-icons">add_shopping_cart</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/wishes">
          <i className="material-icons">favorite</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      {props.profile && ((props.profile.role === 'moderator') || (props.profile.role === 'God')) ? <li><NavLink to="/create">New pillow</NavLink></li> : ''}
      <li>
        <a onClick={() => {props.signOut(); history.push('/')}}>Log Out</a>
      </li>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNav);
