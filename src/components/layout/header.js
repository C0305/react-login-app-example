import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <h1 className="header__nav__title">
                        company
                    </h1>
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
                </nav>
            </header>
        </>
    );
}

export default Header