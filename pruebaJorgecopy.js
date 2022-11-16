"use strict";

const API_KEY = "qCY44X4zazXf33p";
const fetchData = position =>{
  const{latitude, longitude} = position.coords;
  const url = `https://api.tutiempo.net/json/?lan=es&apid=qCY44X4zazXf33p&ll=${latitude},${longitude}`
  fetch(url)
    .then(response => response.json())
    .then(data => setWeatherData(data))
  }

  const setWeatherData = data => {
    console.log(data);
    const weatherData ={
      location: data.name,
      description: data.weather[0].main,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temperature:data.main.temp,
      date:getDate(),
    }

    Object.keys(weatherData).forEach(key =>{
      document.getElementById(key).textContent = weatherData[key];
    });

  }

const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${ ("0" + (date.getMonth() +1)).slice(-2)}-${date.getFullYear()}`;
}


const onLoad =() =>{
  navigator.geolocation.getCurrentPosition(fetchData);
}

