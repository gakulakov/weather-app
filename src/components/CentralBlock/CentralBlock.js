import React from 'react';
import './CentralBlock.scss';
import ChangeCity from "./ChangeCity/ChangeCity";
import WeatherBlock from "../WeatherBlock/WeatherBlock";
import {Button} from '../../templates/Button/Button'
import {showTwoWeeks} from '../../redux/actions/action'
import { connect } from 'react-redux';

const CentralBlock = ({twoWeeks, showTwoWeeks}) => {
    return(
        <div className={'central'}>
            {/* {
                !twoWeeks 
            
                    ? <Button title={'Show Two Weeks'} clickHandler={showTwoWeeks} />
            
                    : <ChangeCity />

            } */}
            <ChangeCity />
            <WeatherBlock />
        </div>
    )
}

const mapDispatchToProps = {
    showTwoWeeks
}

const mapStateToProps = state => {
    return {
        twoWeeks: state.main.twoWeeks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CentralBlock)