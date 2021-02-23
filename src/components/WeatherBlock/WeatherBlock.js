import React from 'react'
import './WeatherBlock.scss'
import MainBlock from "../MainBlock/MainBlock";
import DayWeather from "../DayWeather/DayWeather";
import ChangeCity from "../CentralBlock/ChangeCity/ChangeCity";





const WeatherBlock = () => {




    return (
        <div className={'weather'}>
            <MainBlock />
            <DayWeather />
            <ChangeCity />
        </div>
    )
}


export default WeatherBlock