import React, {useEffect, useState} from 'react'
import './WeatherBlock.scss'
import {weatherApi} from "../../api/weatherApi";
import snow from './img/snowy-6.svg'
// import lightSnow from './img/snowy-4.svg'
import sunlite from './img/day.svg'
// import night from './img/night.svg'
import thunder from './img/thunder.svg'
import cloudy from './img/cloudy.svg'
import rain from './img/rainy-6.svg'

import loader from './img/rings.svg'
import {connect} from "react-redux";
import {getApi} from "../../redux/actions/action";
// import axios from "axios";

const WeatherBlock = ({city, getApi}) => {

    const [api, setApi] = useState({})

    useEffect(() => {
        weatherApi(city).then(res => {
            // console.log(res)
            // console.log(res.weather.forEach(i => i))
            setApi(prevState => ({
                        ...prevState,
                        locate: res.name,
                        temp: Math.round(res.main.temp - 273),
                        feelsLike: Math.round(res.main.feels_like - 273),
                        sunrise: res.sys.sunrise,
                        description: res.weather[0].main,
                        date: res.dt
                    }
                )
            )
        })
    }, [])

    const selectImage = () => {
        switch (api.description){
            case 'Snow':
                return snow
            case 'Thunder':
                return thunder
            case 'Clouds':
                return cloudy
            case 'Clear':
                return sunlite
            case 'Rain':
                return rain
            default:
                return loader
        }
    }

    const selectSmile = () => {
        if (api.feelsLike <= -10 ) return '🥶'
        else if (api.feelsLike <= 0 || api.feelsLike >= 0) return '🤧'
        else if (api.feelsLike >= 10 ) return '🤒'
        else if (api.feelsLike >= 20 ) return '🥵'
        else return '😎'
    }

    // console.log(selectImage())

    // api.description === 'snow' ? snow : null
    // console.log(api)



    return (
        <div className={'weather'}>
            {/*<img src="./img/KrasnodarMain.svg" alt="main page" className={'weather__mainImg'}/>*/}
            <div className="weather__main">
                <img className={'weather__img'} src={selectImage()} alt="Weather"/>
                <p className={"weather__locate"}>{city}</p>
                    <p className={"weather__now"}>Сейчас на улице: </p>
                    <h2 className={'weather__temp'}>{api.temp}&deg;<img src={selectImage()} alt=""/></h2>
                    <p className={"weather__feelsLike"}>Ощущается как: </p> <h3>{api.feelsLike}&deg; {selectSmile()}</h3>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        city: state.main.city,
    }
}

export default connect(mapStateToProps, null)(WeatherBlock)