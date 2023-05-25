import axios from 'axios';

const options = {
  url: __WEATHER_URL__,
  headers: {
		'X-RapidAPI-Key': __WEATHER_API_KEY__,
		'X-RapidAPI-Host': __WEATHER_API_HOST__
	},
};

export const weatherAPI = {
    async getWeather(city = 'Stavropol', days = 3) {
    try {
      const response = await axios.request({...options, params: {q: city, days: days}});
      console.log(response);
      return response.data;
    } catch(err) {
      if (axios.isAxiosError(err)) {
        throw err
      } else {
        console.log(err);
        throw new Error('different error than axios')
      }
    }
  }
}
