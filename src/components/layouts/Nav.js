import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';
import { connect } from 'react-redux';
import Search from './Search';
import Profile from './Profile';

const Nav = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInNav profile={profile} /> : <SignedOutNav />;
  const userMobile = auth.uid ? <Profile profile={profile} /> : null;
  return (
    <>
      <nav className="nav-wrapper dokiColor">
        <div className="container">
          <NavLink to="/" className="brand-logo">Dakimaku</NavLink>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
          <div className="hide-on-med-and-down">
            <ul className="right">
              <li><NavLink to="/categories">Categories</NavLink></li>
              {links}
              <li><NavLink to="/">Language</NavLink></li>
              <li><Search /></li>
            </ul>
          </div>
        </div>
      </nav>
      <ul id="slide-out" class="sidenav">
        <li>{userMobile}</li>
        <li><NavLink to="/" className="brand-logo">Dakimaku</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        {links}
        <li><NavLink to="/">Language</NavLink></li>
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav)
