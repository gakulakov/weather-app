import React from 'react'
import './Footer.scss'

export const Footer = () => {


    return (
        <div className={'footer'}>
            <div className={'footer__left'}>
                <p>Payments Options:</p>
            </div>

            <div className={'footer__right'}>
                <div className={'footer__right__features'}>
                    <p>FEATURES:</p>
                </div>
                <div className={'footer__right__info'}>
                    <p>3D Stereo Music</p>
                    <p>Air Control Music String</p>
                    <p>24 BIT Music Transmit</p>
                    <p>Line in/Line out</p>
                    <p>Compatible with Android/iPhones</p>
                    <p>57mm Ultra Big Drive Units for Bass</p>

                    <button className="footer__right__button" >ПОДПИСАТЬСЯ НА PUSH УВЕДОМЛЕНИЯ</button>
                </div>
            </div>
        </div>
    )
}