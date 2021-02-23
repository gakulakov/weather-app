import React from "react";
import "./DayCard.scss";
import snow from "../../../assets/img/snowy-6.svg";
import cloudyDay from "../../../assets/img/cloudy-day-1.svg";
import cloudy from "../../../assets/img/cloudy.svg";
import lightRain from "../../../assets/img/rainy-2.svg";
import lightSnow from "../../../assets/img/snowy-4.svg";
import sunlite from "../../../assets/img/day.svg";
import lightRain2 from "../../../assets/img/rainy-4.svg";
import loader from "../../../assets/img/rings.svg";
import "swiper/swiper-bundle.css";


export const DayCard = ({ data }) => {
  const date = () => new Date(data.ts * 1000).getHours();

  const selectImage = () => {
    switch (data.weather.description) {
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

  return (
    <>
      <p>{date()}</p>
      <img src={selectImage()} width={50} alt="" />
      <p>{data.temp}&deg;</p>
    </>
  );
};
