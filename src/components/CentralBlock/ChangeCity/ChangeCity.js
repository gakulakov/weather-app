import React, {useEffect, useState} from 'react';
import './ChangeCity.scss';
import {weatherApiSixTeen} from "../../../api/weatherApiSixTeen";
import {connect} from "react-redux";
import {getArr} from "../../../redux/actions/action";

const ChangeCity = ({city, twoWeeks, getArr}) => {

    const [load, setLoad] = useState(true)
    const [api, setApi] = useState({})

    useEffect(() => {

        weatherApiSixTeen(city).then(res => {
            // console.log(res)
            setApi(res)
            setLoad(false)
            getArr(res)
        })

    }, [])


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

    const g = () => api.data.map((i, index) => <li key={index}>{i.rh}</li>)


    return (
        <div className={'change'}>
            <div className={'change__text'}>
                <p className={'change__aaa'}>available</p>
                <p>weather</p>
            </div>
            <div className={'change__selectors'}>
                <ul className={'change__selectors__list'}>
                    {/*{generateLi}*/}
                    {!load && g()}
                    {/*<li/>*/}
                    {/*<li/>*/}
                    {/*<li/>*/}
                    {/*<li/>*/}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        city: state.main.city,
        twoWeeks: state.main.twoWeeks
    }
}

const mapDispatchToProps = {
    getArr
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCity)