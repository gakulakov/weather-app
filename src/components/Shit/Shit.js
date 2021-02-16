import React, {useEffect, useState} from 'react'
import {weatherApiSixTeen} from "../../api/weatherApiSixTeen";
import {getArr} from "../../redux/actions/action";
import {connect} from "react-redux";

const Shit = ({city, getArr}) => {
    const [load, setLoad] = useState(true)
    const [api, setApi] = useState({})

    useEffect(() => {

        weatherApiSixTeen(city).then(res => {
            setApi(prevState => ({
                ...prevState,
                data: res.data,
                cityName: res.city_name
            }))
        })


    }, [])

    getArr(api)


    return(
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        city: state.main.city
    }
}

const mapDispatchToProps = {
    getArr
}


export default connect(mapStateToProps, mapDispatchToProps)(Shit)