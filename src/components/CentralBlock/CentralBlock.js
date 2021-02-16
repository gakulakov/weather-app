import React from 'react';
import './CentralBlock.scss';
import ChangeCity from "./ChangeCity/ChangeCity";
import WeatherBlock from "../WeatherBlock/WeatherBlock";

export const CentralBlock = () => {
    return(
        <div className={'central'}>
            <ChangeCity />
            <WeatherBlock />
        </div>
    )
}