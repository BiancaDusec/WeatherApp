import React, { useState } from 'react';
import "../pages/home.css"
function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ro&units=metric&appid=5cdf5c06a466d9352457fe87b8230141`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLocation(''); // imp! Clear the input after fetching data
        })
        .catch((error) =>
          console.error('Error fetching the weather data:', error)
        );
    }
  };

  return (
    <div className="appweather">
      <div className="search">
        <input
        className='input-search'
          type="text"
          placeholder="Type Location"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>

      <div className="container">
        <div className="header">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C </h1> : null}
            <p>temperatura</p>
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        <div className="footer">
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Umiditate</p>
          </div>

          <div className="wind">
            {data.wind ? <p>{data.wind.speed} MPH </p> : null}
            <p>Viteza Vant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
