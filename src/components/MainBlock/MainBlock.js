import React, {useEffect} from 'react'
import './MainBlock.scss'
import {getArr} from "../../redux/actions/action";
import {connect} from "react-redux";
import {weatherApi} from "../../api/weatherApi";
import snow from "../../assets/img/snowy-6.svg";
import thunder from "../../assets/img/thunder.svg";
import cloudy from "../../assets/img/cloudy.svg";
import sunlite from "../../assets/img/day.svg";
import rainLight from "../../assets/img/rainy-4.svg";
import rain from "../../assets/img/rainy-6.svg";
import mist from "../../assets/img/mist.svg";
import loader from "../../assets/img/rings.svg";
import night from "../../assets/img/night.svg";



const MainBlock = ({city, getArr, dataApi}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    useEffect(() => {
        weatherApi(city).then(res => {
            getArr(res)
        })
    }, [])


    const selectImage = () => {
        switch (dataApi?.data[0].weather.description){
            case 'Drizzle':
                return snow
            case 'Thunder':
                return thunder
            case 'Overcast clouds':
                return cloudy
            case 'Clear':
                return sunlite
            case 'Light rain':
                return rainLight
            case 'Rain':
                return rain
            case 'Mist':
                return mist
            case 'Fog':
                return mist
            default:
                return loader
        }
    }


    const dayIcon = () => dataApi?.data[0].pod === 'n' ? night : sunlite

    return(
        <div className={'main-block'}>
            <div className={'main-block__header'}>
                <div>
                    <p>{city}, RU</p>
                    <p>Monday 22 February</p>
                </div>
                <img src={dayIcon()} width={150   } alt=""/>
            </div>

            <div className={'main-block__body'}>
                <div className={'main-block__body__left'}>
                    <img src={selectImage()} width={350} alt=""/>
                    <div className={'main-block__body__left__text'}>
                        <p>{dataApi?.data[0].temp}&deg;</p>
                        <p>{dataApi?.data[0].weather.description}</p>
                    </div>
                </div>

                <i />

                <div className={'main-block__body__right'}>

                    <div className={'main-block__body__right__item'}>
                        <div>
                            <p>{Math.floor(dataApi?.data[0].wind_spd)}m/sec</p>
                            <p>Wind</p>
                        </div>

                        <div>
                            <p>{dataApi?.data[0].rh}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className={'main-block__body__right__item'}>
                        <div>
                            <p>{dataApi?.data[0].sunset}</p>
                            <p>Sunset</p>
                        </div>

                        <div>
                            <p>{dataApi?.data[0].sunrise}</p>
                            <p>Sunrise</p>
                        </div>
                    </div>
                    <div className={'main-block__body__right__item'}>
                        <div>
                            <p>{dataApi?.data[0].app_temp}&deg;</p>
                            <p>Feels like</p>
                        </div>

                        <div>
                            <p>{dataApi?.data[0].aqi}</p>
                            <p>Air quality (EPA)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        city: state.main.city,
        dataApi: state.main.dataApi
    }
}

const mapDispatchToProps = {
    getArr
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBlock)