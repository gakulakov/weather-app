import React, { useEffect, useState } from "react";
import "./ChangeCity.scss";
import { weatherApiSixTeen } from "../../../api/weatherApiSixTeen";
import { connect } from "react-redux";
import { getTwoWeeks } from "../../../redux/actions/action";
import WeatherCard from "../../../templates/WeatherCard/WeatherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);


const ChangeCity = ({ city, dataTwoWeeks, getTwoWeeks }) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    weatherApiSixTeen(city).then((res) => {

      setLoad(false);
      getTwoWeeks(res);
    });
  }, []);

  // console.log(twoWeeks?.city_name)
  // console.log(api.data)

  // Вытаскиваю массив.
  // -------------------------------------------------------------

  // const getArr = () => {
  //     const result = []
  //     for (let i in api.data) {
  //         // console.log(api.data[i])
  //         result.push(api.data[i])
  //     }
  //     return result
  // }
  //
  // const arr = getArr()

  // -------------------------------------------------------------

  // const generateLi = arr.map((i, index) => {
  //     // Получение дня недели
  //     const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  //     const day = new Date(i.ts * 1000).getDay()
  //
  //
  //     return (
  //         <li key={index} className={'change__item'}>
  //             День: {days[day]} Температура: {i.temp}
  //         </li>
  //     )
  // })

  const generateCards = () =>
    dataTwoWeeks?.data.map((i, index) => {
      //   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      //   const day = new Date(i.ts * 1000).getDay();
      return <SwiperSlide
      key={`thumb-${index}`}
      tag={"li"}
      style={{ listStyle: "none" }}
    >
      <WeatherCard data={i} key={index} />
      </SwiperSlide>
    });

    const windowFinder = () => {
      if (window.innerWidth >= 1500) return 10
      if (window.innerWidth < 1500 && window.innerWidth >= 1100) return 8
      if (window.innerWidth < 1100 && window.innerWidth > 800) return 6
      if (window.innerWidth < 800 && window.innerWidth > 600) return 4
      else return 2
    //   if (window <= 1000) return 12
  }

  return (
    <div className={"change"}>
      <div className={"change__container"}>
        {/* <div className={"change__text"}>
          <p className={"change__aaa"}>available</p>
          <p>weather</p>
        </div> */}
        <div className={"change__selectors"}>

         
            {dataTwoWeeks &&
             <Swiper
             id={"thumbs"}
             spaceBetween={3}
             slidesPerView={windowFinder()}
           >
            {generateCards()}
            </Swiper>

            }

            
            {/*{generateLi}*/}
            {/* {!load && generateCards()} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.main.city,
    dataTwoWeeks: state.main.dataTwoWeeks,
  };
};

const mapDispatchToProps = {
  getTwoWeeks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCity);
