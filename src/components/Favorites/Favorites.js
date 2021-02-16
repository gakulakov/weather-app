import React from 'react';
import './Favorites.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {selectCity} from "../../redux/actions/action";


const Favorites = ({
    selectCity
                   }) => {

    const cities = [ // TODO: ОБЯЗАТЕЛЬНО УДАЛИТЬ!
        'Krasnodar', 'Moscow', 'Rostov-On-Don', 'St. Petersburg',
        'Sochi', 'Novosibirsk', 'Saratov', 'Vladivostok', 'Habarovsk',
        'Siktivkar', 'Anapa', 'Krasnoyarsk', 'Kazan', 'Ekaterinburg',
        'Tula'
    ].sort()

    const favGenerate = cities.map((i, index) => {
        return (
            <span key={index} className={`favorites__items ${index}`} onClick={() => selectCity(i)}>
                <NavLink to={`/`} key={index} className={`favorites__items ${index}`}>{i}</NavLink>
            </span>
        )
    })


    return (
        <div className={'favorites'}>
            <div className={'favorites__cities'}>
                {favGenerate}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    selectCity
}

export default connect(null, mapDispatchToProps)(Favorites)