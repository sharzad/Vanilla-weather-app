function formateData(timesstamp){
    return;
}
functiondisplayTemperature(response);
{
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let discriptionElement = document.querySelector("#discription");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  discriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateData(response.data.dt*1000);
}

let apiKey = "e2b9b76cb3bcb2d9cce084cc724f675b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
