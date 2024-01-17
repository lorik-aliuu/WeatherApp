import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../WeatherApp/search.png";
import clear_icon from "../WeatherApp/clear.png";
import cloud_icon from "../WeatherApp/cloud.png";
import drizzle_icon from "../WeatherApp/drizzle.png";
import humidity_icon from "../WeatherApp/humidity.png";
import rain_icon from "../WeatherApp/rain.png";
import snow_icon from "../WeatherApp/snow.png";
import wind_icon from "../WeatherApp/wind.png";

const WeatherApp = () => {
  const [y, setY] = useState(cloud_icon);

  let api = "6d9cdbca2b5eee3354d9f78efb501aaf";

  const search = async () => {
    const x = document.getElementsByClassName("qytetiInput");
    console.log("City value:", x[0].value);

    if (x[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${x[0].value}&units=Metric&appid=${api}`;

    let response = await fetch(url);

    let data = await response.json();

    const lageshtia = document.getElementsByClassName("humidity");
    const era = document.getElementsByClassName("era");
    const temperatura = document.getElementsByClassName("temperatura");
    const qyteti = document.getElementsByClassName("qyteti");

    lageshtia[0].innerHTML = data.main.humidity + "%";
    era[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperatura[0].innerHTML = Math.floor(data.main.temp) + "°C";
    qyteti[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setY(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setY(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setY(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setY(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setY(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10nn"
    ) {
      setY(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setY(snow_icon);
    } else {
      setY(clear_icon);
    }
  };

  return (
    <div className="container">
      <div className="titulli">
        <h1>Moti Në Qytetin Tënd</h1>
      </div>
      <div className="navbar">
        <input type="text" className="qytetiInput" placeholder="Kërko" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="Search icon" />
        </div>
      </div>

      <div className="image">
        <img src={y} alt="" />
      </div>
      <div className="temperatura">15°C</div>
      <div className="qyteti">Prishtina</div>

      <div className="main">
        <div className="main_element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity">20%</div>
            <div className="paragraph">Lagështia</div>
          </div>
        </div>

        <div className="main_element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="era">10 km/h</div>
            <div className="paragraph">Shpejtesia e eres</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
