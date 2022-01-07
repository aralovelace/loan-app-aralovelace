import * as actions from '../state/weather/actions';
import { fetchCityWeather } from './fetch-city-weather.api';

const fetchCity = (cityName: string) => {
  return (dispatch) => {
    fetchCityWeather(cityName).then(selectTemperature).then(actions.addCity).then(dispatch)
  }
}

const selectTemperature = (response) => {
  const { id, name } = response.data;
  const { temp } = response.data.main;
  return {
    id,
    name,
    temp
  }
}

export { fetchCity };
