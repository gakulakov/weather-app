import React from 'react';
import './Header.scss';
import {Logo} from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import menu from './img/menu.svg'

const Header = ({city}) => {
    return(
        <div className={'header'}>
            <div className={'header__logo'}>
                <Logo />
            </div>
            <div className={'header__info'}>
                <ul className={'header__list'}>
                    {/*<li className={'header__list__item'}>SIGN IN</li>*/}
                    {/*<li className={'header__list__item'}><NavLink to="/favorites">CITIES</NavLink></li>*/}
                    <li className={'header__list__item'}><NavLink to={'/favorites'}>{city.toUpperCase()}</NavLink></li>
                    <img src={menu} alt="menu"/>
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