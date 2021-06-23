let lon;
let lat;
let temperature = document.getElementById("temperature");
let summary = document.getElementById("summary");
let loc = document.getElementById("location");
let humid = document.getElementById("humid");
let pre = document.getElementById("pressure");
let icon = document.getElementById("icon");
let coords = document.getElementById("coords");
const kelvin = 273;
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
const api = "6d055e39ee237af35ca066f35474e9df";
const base =
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
      `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
        
            // Calling the API
fetch(base)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                temperature.textContent = 
                    Math.floor(data.main.temp - kelvin) + "°C";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
                humid.innerHTML = "Humidity - "+data.main.humidity + "%";
                pre.innerHTML = "PRESSURE - " + data.main.pressure + "hPa";
                let icon1 = data.weather[0].icon;
                const img = document.querySelector('#icon');
                img.setAttribute('src', `http://openweathermap.org/img/wn/${icon1}@2x.png`)
                coords.innerHTML = "CO-ORDINATES - " + lat + " , " + lon;
              });
          });
        };
      });
    