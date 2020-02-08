import React from 'react';
import moment from 'moment';
import './Weather.css';
import cloudy from './cloudy.svg';

const Weather = props => {
  return (
    <div className="card">
      <p>{props.infos.name}</p>
      <div className="card-body">
        <div className="card-body-item aside">
          <img className="aside-item" src={cloudy} />
          <span className="aside-item">{props.infos.description}</span>
        </div>
        <div className="card-body-item">{props.infos.temperature} °C</div>
        <div className="card-body-item">
          <ul>
            <li>Wind: {props.infos.wind} kmph</li>
            <li>Precip: {props.infos.precip} mm</li>
            <li>Pressure: {props.infos.pressure} mb</li>
          </ul>
        </div>
      </div>
      <p className="time">{moment().format('hh:mm a')}</p>
    </div>
  );
};

export default Weather;
