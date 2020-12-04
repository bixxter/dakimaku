import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <nav>
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Header
