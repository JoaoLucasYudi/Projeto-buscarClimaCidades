const apiKey = "7816b74838eaccc9442e592156148cf0";
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const windyElement = document.querySelector("#wind span");
const umidityElement = document.querySelector("#umidity span");

const weatherContainer = document.querySelector("#weather-data");

const getWeatherData = async(city) => {
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

  const res = await fetch(apiWeatherUrl);
  const data = await res.json()
  console.log(data)
  return data;
  
}

const getCityName = async (city) => {

  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/64.png`)
  windyElement.innerText = data.wind.speed;
  umidityElement.innerText = data.main.humidity;

  weatherContainer.classList.remove('hide')


}

cityInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value;
    getCityName(city)
     
  }
})

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getCityName(city)
  
})