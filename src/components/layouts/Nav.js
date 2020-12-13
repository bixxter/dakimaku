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
      <nav className="dokiColor">
        <div className="nav-wrapper navMenu">
          <NavLink to="/" className="brand-logo dokiFont">
            Dakimaku
          </NavLink>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <div className="hide-on-med-and-down">
            <ul className="right">
              <li>
                <Search />
              </li>
              <li>
                <NavLink to="/dashboard">Categories</NavLink>
              </li>
              {links}
            </ul>
          </div>
        </div>
      </nav>

      <ul id="slide-out" class="sidenav">
        <li>{userMobile}</li>
        <li>
          <NavLink to="/" className="brand-logo">
            Dakimaku
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Categories</NavLink>
        </li>
        {links}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Nav);
