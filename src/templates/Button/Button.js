import React from "react";
import "./Button.scss";


export const Button = ({title, clickHandler}) => {
    return(
        <div className={'button'} onClick={clickHandler}>
            <p>{title}</p>
        </div>
    )
}