import React from 'react'
import './Modal.scss'
import clouds from './img/cloudy-day-3.svg'
import {connect} from "react-redux";

const Modal = ({clickHandler, data, city}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = {
        dayWeek: new Date(data.ts * 1000).getDay(),
        day: new Date(data.ts * 1000).getDate(),
        month: new Date(data.ts * 1000).getMonth(),
    }

    const riseSet = (unix) => {
        const hour = new Date(unix * 1000).getHours()
        const minute = new Date(unix * 1000).getMinutes()
        const result = minute < 10 ? `${hour}:0${minute}` : `${hour}:${minute}`

        return result
    };




    return (
        <div className={'container'}>
            <div className={'modal'}>
                <div className={'modal__city-date'}>
                    <div>
                        <p className={'modal__city'}>{city}, RU</p>
                        <p className={'modal__date'}>{`${days[date.dayWeek]} ${date.day} ${months[date.month]}`}</p>
                    </div>
                    <p className={'modal__cross'} onClick={clickHandler}>&#10006;</p>
                </div>

                <div className={'modal__main-info'}>
                    <div className={'modal__temp'}>
                        <img width={350} src={clouds} alt={'image'}/>
                        <div>
                            <p>{data.temp}&deg;</p>
                            <p>{data.weather.description}</p>
                        </div>
                    </div>

                    <i/>

                    <div className={'modal__content'}>
                        <div className={'modal__high'}>
                            <p>{data.high_temp}&deg;</p>
                            <p>High</p>
                        </div>
                        <div className={'modal__high'}>
                            <p>{Math.floor(data.wind_spd)}mpH</p>
                            <p>Wind</p>
                        </div>
                        <div className={'modal__high'}>
                            <p>{riseSet(data.sunrise_ts)}</p>
                            <p>Sunrise</p>
                        </div>
                        <div className={'modal__high'}>
                            <p>{data.low_temp}</p>
                            <p>Low</p>
                        </div>
                        <div className={'modal__high'}>
                            <p>{data.pop}%</p>
                            <p>Rain/Snow</p>
                        </div>
                        <div className={'modal__high'}>
                            <p>{riseSet(data.sunset_ts)}</p>
                            <p>Sunset</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        city: state.main.city
    }
}


export default connect(mapStateToProps, null)(Modal)