import React, {useState} from "react";
import "./WeatherCard.scss";

import snow from "./img/snowy-6.svg";
import lightSnow from "./img/snowy-4.svg";
import lightRain from "./img/rainy-2.svg";
import lightRain2 from "./img/rainy-4.svg";
import sunlite from "./img/day.svg";
import cloudyDay from "./img/cloudy-day-1.svg";
import cloudy from "./img/cloudy.svg";
import loader from "./img/rings.svg";
import Tilt from "react-tilt/dist/tilt";
import Modal from "../../components/Modal/Modal";

// import rain from './img/rainy-6.svg'
// import thunder from './img/thunder.svg'

export const WeatherCard = ({data, indexId}) => {

    const [showModal, setShowModal] = useState(false)

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = new Date(data.ts * 1000).getDay();

    const date = new Date(data.ts * 1000).getDate();

    const description = data.weather.description;

    // console.log(description);

    // Выбор svg.

    const selectImage = () => {
        switch (description) {
            case "Mix snow/rain" || "Light snow":
                return snow;
            case "Scattered clouds":
                return cloudyDay;
            case "Overcast clouds":
                return cloudy;
            case "Broken clouds":
                return cloudy;
            case "Light shower rain":
                return lightRain;
            case "Light snow":
                return lightSnow;
            case "Clear Sky":
                return sunlite;
            case "Few clouds":
                return cloudyDay;
            case "Light rain":
                return lightRain2;
            case "Snow" :
                return snow
            default:
                return loader;
        }
    };

    const options = {
      reverse:        false,  // reverse the tilt direction
      max:            50,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,    // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const clickHandler = () => setShowModal(prevState => !prevState)

    return (
        <>
                <li className={"weather-card"} onClick={() => clickHandler()}>
                    <p>{date}&nbsp;</p>
                    <p>{days[day]}</p>
                    <img src={selectImage()} alt={'image'} className={"Tilt-inner"}/>
                    <p>{data.temp}&deg;</p>
                </li>
            {
                showModal ? <Modal clickHandler={clickHandler} data={data} /> : null
            }
        </>
    );
};
