import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import WBStyle from './WeatherBlock.module.css'

const ShowWeather = (props) => {

    const [info,setInfo] = useState()

    useEffect(() => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9efe3a0a266d3bdb77d3c00f94bb4c24`).then(r => {
            setInfo(r.data)
            console.log(r.data)
        })
    },[props])

    return (
        <div className={WBStyle.main} style={{backgroundImage:`url("https://source.unsplash.com/1600x900/?${props.city}")`}}>
            {info? <div className={WBStyle.blockWithWeather} >
                    <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt=""/>
                    <h1>City: {info.name}</h1>
                    <h2>Degree: {Math.round(info.main.temp - 273.15)} <span>&#8451;</span></h2>
                    <h4>Weather conditions: {info.weather[0].main}</h4>
                </div>
                : null}
        </div>
    );
};

export default ShowWeather;