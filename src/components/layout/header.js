import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {logOut} from "../../store/actions"

const routesArray = [
    {name: "home"},
    {name: "transfer"}
]

const navItems = (path) => {
    const loggedUser = useSelector(state => state.userManagement);
    const dispatch = useDispatch()

    const signOff = () => {
        dispatch(logOut)
    }

    const isActive = (name) => {
        return path.includes(name) ? "active" : ""
    }

    const routesList = routesArray.map(({name}, index) => {
        return (
            <li key={index} className={isActive(name)}>
                <Link to={`/${name}`}>{name}</Link>
            </li>
        )
    })

    if (loggedUser !== "") {
        return (
            <>
                <div className="header__nav__item">
                    <ul>
                        {routesList}
                    </ul>
                </div>
                <div className="header__nav__item">
                    <ul>
                        <li onClick={signOff}>
                            <a>Log Out</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
    return null
}

const Header = ({location}) => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <h1 className="header__nav__title">
                        company
                    </h1>
                    {navItems(location.pathname)}
                </nav>
            </header>
        </>
    );
}
export default withRouter(Header)