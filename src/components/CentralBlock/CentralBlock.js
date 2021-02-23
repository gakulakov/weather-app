import React from 'react';
import './CentralBlock.scss';
// import ChangeCity from "./ChangeCity/ChangeCity";
import WeatherBlock from "../WeatherBlock/WeatherBlock";
import { connect } from "react-redux";
import Modal from '../Modal/Modal';


const CentralBlock = ({modal}) => {
    return(
        <div className={'central'}>
            <WeatherBlock />
            {
            modal?.show ? <Modal data={modal.data} /> : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.main.modal
    }
}

export default connect(mapStateToProps, null)(CentralBlock)