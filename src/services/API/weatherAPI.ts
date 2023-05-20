import axios from 'axios';

const options = {
  method: 'GET',
  url: __WEATHER_URL__,
  headers: {
		'X-RapidAPI-Key': __WEATHER_API_KEY__,
		'X-RapidAPI-Host': __WEATHER_API_HOST__
	},
};

export const weatherAPI = {
  async getWeather(city = 'Stavropol', days = 3) {
    try {
      const responce = await axios.request({...options, params: {q: city, days: days}});
      return responce.data;
    } catch(err) {
      console.log(err);
    }
  }
}
