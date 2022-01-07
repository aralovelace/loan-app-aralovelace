import axios from "axios";

const apiKey = "15fe3167b839fc6cb3a601d177ba0069";
const baseUrl = "https://api.openweathermap.org/data/2.5";

const fetchCityWeather = (cityName) => {
  const url = `${baseUrl}/weather?q=${cityName}&APPID=${apiKey}`;
  return axios.get(url);
};
export { fetchCityWeather };
