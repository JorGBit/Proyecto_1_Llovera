"use strict";

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitud: ${latitude} °, Longitud: ${longitude} °`;


    }
  
    function error() {
      status.textContent = 'No hemos podido acceder a tu geolocalización';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'No hemos podido acceder a tu geolocalización';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);



/*

const API_KEY = "79a2ba2d7b46e2a3822042bc7a98db38";
const ConexionLatLongConApy = position => {
   const {latitude, longitude}= position.coords;
   fetch(`http://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
    

    console.log(position);
}

const onLoad =() =>{
    navigator.geolocation.getCurrentPosition(ConexionLatLongConApy);
}

*/