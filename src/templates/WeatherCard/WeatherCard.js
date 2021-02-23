import React, { useState } from "react";
import "./WeatherCard.scss";
import { showModalHandler } from "../../redux/actions/action";

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
import { connect } from "react-redux";

// import rain from './img/rainy-6.svg'
// import thunder from './img/thunder.svg'

const WeatherCard = ({ data, indexId, showModalHandler }) => {
  const [showModal, setShowModal] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = new Date(data.ts * 1000).getMonth();

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
      case "Snow":
        return snow;
      default:
        return loader;
    }
  };

  const clickHandler = () => {
    showModalHandler(data)
};

  return (
    <>
        <div className={"weather-card"} onClick={() => clickHandler()}>
          <p>
            {date}&nbsp; {months[month]}
          </p>
          <img src={selectImage()} alt={"image"} className={"Tilt-inner"} />
          <p>{data.temp}&deg;</p>
        </div>
      
    </>
  );
};

const mapDispatchToProps = {
  showModalHandler
}

// const mapStateToProps = state => {
//   return {
//     showModal
//   }
// }

export default connect(null, mapDispatchToProps)(WeatherCard)