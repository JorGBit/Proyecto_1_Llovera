"use strict";

const API_KEY = "79a2ba2d7b46e2a3822042bc7a98db38";
const fetchData = position =>{
  const{latitude, longitude} = position.coords;
  fetch(`http://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`)
  .them(response => console.log(response));
    console.log(position);
}
const onLoad =() =>{
  navigator.geolocation.getCurrentPosition(fetchData);
}

