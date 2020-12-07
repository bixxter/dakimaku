import React from 'react';
import {Link} from 'react-router-dom'
import SignedInNav from './SignedInNav'
import SignedOutNav from './SignedOutNav'
import {connect} from 'react-redux'

const Nav = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Fireb</Link>
                <SignedInNav />
                <SignedOutNav />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{}
}

export default connect(mapStateToProps)(Nav)