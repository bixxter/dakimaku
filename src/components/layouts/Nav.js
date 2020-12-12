import React from 'react';
import { Link } from 'react-router-dom';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';
import { connect } from 'react-redux';
import Search from './Search';

const Nav = () => {
  return (
    <nav className="nav-wrapper navbar">
      <Link to="/" className="brand-logo">
        Dakimaku
      </Link>
      <Search />
      {/* <SignedInNav /> */}
      <SignedOutNav />
      <ul className="right">
        <li>
          <Link to="/">Categories</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Language</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Nav);
