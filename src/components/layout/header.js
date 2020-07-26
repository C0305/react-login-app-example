import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"

const naveItems = () => {
    return (
        <>
            <div className="header__nav__item">
                <ul>
                    <li>
                        <Link to="/home">home</Link>
                    </li>
                    <li>
                        <Link to="/transfer">transfer</Link>
                    </li>
                </ul>
            </div>
            <div className="header__nav__item">
                <ul>
                    <li>
                        <a>Log Out</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

function Header({loggedUser}) {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <h1 className="header__nav__title">
                        company
                    </h1>
                    {loggedUser !== "" ? naveItems() : null}
                </nav>
            </header>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.login
    }
}

export default connect(mapStateToProps)(Header)