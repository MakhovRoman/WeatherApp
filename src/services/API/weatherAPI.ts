import axios from 'axios';

const options = {
  method: 'GET',
  url: __WEATHER_URL__,
  headers: {
		'X-RapidAPI-Key': __WEATHER_API_KEY__,
		'X-RapidAPI-Host': __WEATHER_API_HOST__
	},
  params: {
    days: 3
  },
};

export const weatherAPI = {
  async getWeather(city = 'Stavropol') {
    try {
      const responce = await axios.request({...options, params: {q: city}});
      return responce.data.current;
    } catch(err) {
      console.log(err);
    }
  }
}
