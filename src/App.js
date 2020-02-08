import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather';
import Aside from './Aside';

const App = () => {
  const API_KEY = 'bdea17ed11f1f0a6b4c5f2eec2c087ec';

  const [search, setSearch] = useState('istanbul');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getDataFromAPI();
  }, [search]);

  const getDataFromAPI = async () => {
    const result = await fetch(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`
    );
    const data = await result.json();
    setWeather({
      name: data.request.query,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      wind: data.current.wind_speed,
      pressure: data.current.pressure,
      precip: data.current.precip,
      image: data.current.weather_icons[0],
      time: data.current.observation_time
    });
  };

  const submitHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <section className="container">
        <Aside className="left-side" submit={e => submitHandler(e)} />
        <Weather className="weather-card" infos={weather} />
      </section>
    </div>
  );
};

export default App;
