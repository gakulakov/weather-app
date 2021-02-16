import React from 'react';
import './Logo.scss';
import {NavLink} from "react-router-dom";

export const Logo = () => {
    return(
        <div className={'logo'}>
            <NavLink to="/" exact activeClassName={'logo-active'}>
            <p className={'logo__weather'}>WEATHER.</p>
            <p className={'logo__app'}>app</p>
            </NavLink>
        </div>
    )
}