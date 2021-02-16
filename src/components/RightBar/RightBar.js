import React, {useState} from 'react';
import './RightBar.scss';

export const RightBar = () => {
    const [onOff, setOnOff] = useState(null);


    const active = (item) => item === onOff ? 'right-bar__list__item active' : 'right-bar__list__item'; // Активация определенного item


    const arr = ['Krasnodar', 'Rostov', 'Moscow', 'StPetersburg'].map((i, index) => {
            return (
                <li key={index}
                    onClick={() => setOnOff(i)}
                    className={active(i)}>
                    <img
                        src={`./img/${i}.svg`} alt=""/>
                </li>
            )
        }
    )


    return (
        <div className={'right-bar'}>
            {/*<img className={'right-bar__arrow'} src="./img/upArrow.svg" alt="up"/>*/}
            <ul className={'right-bar__list'}>
                {arr}
            </ul>
            {/*<img className={'right-bar__arrow'} src="./img/downArrow.svg" alt="up"/>*/}
        </div>
    )
}