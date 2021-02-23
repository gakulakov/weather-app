import React, { useEffect, useState } from "react";
import "./DayWeather.scss";
import { weatherHoursApi } from "../../api/weatherApi";
import { connect } from "react-redux";
import { DayCard } from "./DayCard/DayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const DayWeather = ({ city }) => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    weatherHoursApi(city).then((res) => setApi(res));
  }, []);

  console.log(api);

  const generateCards = () =>
    api?.data.map((i, index) => (
      <SwiperSlide
        key={`thumb-${index}`}
        tag={"li"}
        style={{ listStyle: "none" }}
      >
        <DayCard data={i} />
      </SwiperSlide>
    ));



  const windowFinder = () => {
      if (window.innerWidth >= 1000) return 12
      if (window.innerWidth <= 1000 && window.innerWidth >= 700) return 8
      if (window.innerWidth < 700 && window.innerWidth > 500) return 6
      else return 4
    //   if (window <= 1000) return 12
  }

  return (
    <div className={"day-weather"}>
      <i />

      {api && (
      <div className={'day-weather__container'}>
        <Swiper
          id={"thumbs"}
          spaceBetween={3}
          slidesPerView={windowFinder()}
        >
          {api?.data.map((i, index) => (
            <SwiperSlide key={index} tag={"li"} style={{ listStyle: "none" }}>
              <DayCard data={i} />
            </SwiperSlide>
          ))}
        </Swiper>
</div>

      )}


      <i />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.main.city,
  };
};

export default connect(mapStateToProps, null)(DayWeather);
