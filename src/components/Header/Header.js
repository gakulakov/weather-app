import React from 'react';
import './Header.scss';
import {Logo} from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({city}) => {
    return(
        <div className={'header'}>
            <div className={'header__logo'}>
                <Logo />
            </div>
            <div className={'header__info'}>
                <ul className={'header__list'}>
                    <li className={'header__list__item'}>SEARCH</li>
                    <li className={'header__list__item'}><NavLink to={'/'}>{city.toUpperCase()}</NavLink></li>
                    <li className={'header__list__item'}><NavLink to="/favorites">CITIES</NavLink></li>
                    <img src="./img/Menu.svg" alt="menu"/>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        city: state.main.city
    }
}

export default connect(mapStateToProps, null)(Header)