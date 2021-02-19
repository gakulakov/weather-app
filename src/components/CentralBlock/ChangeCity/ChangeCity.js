import React, { useEffect, useState } from "react";
import "./ChangeCity.scss";
import { weatherApiSixTeen } from "../../../api/weatherApiSixTeen";
import { connect } from "react-redux";
import { getArr } from "../../../redux/actions/action";
import { WeatherCard } from "../../../templates/WeatherCard/WeatherCard";

const ChangeCity = ({ city, dataApi, getArr }) => {
  const [load, setLoad] = useState(true);
  // const [api, setApi] = useState({})

  useEffect(() => {
    weatherApiSixTeen(city).then((res) => {
      // console.log(res)
      // setApi(res)
      setLoad(false);
      getArr(res);
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

  const g = () =>
    dataApi?.data.map((i, index) => {
      //   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      //   const day = new Date(i.ts * 1000).getDay();
      return <WeatherCard data={i} key={index} />;
    });

  return (
    <div className={"change"}>
      <div className={"change__container"}>
        <div className={"change__text"}>
          <p className={"change__aaa"}>available</p>
          <p>weather</p>
        </div>
        <div className={"change__selectors"}>
          <ul className={"change__selectors__list"}>
            {/*{generateLi}*/}
            {!load && g()}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.main.city,
    dataApi: state.main.dataApi,
  };
};

const mapDispatchToProps = {
  getArr,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCity);
