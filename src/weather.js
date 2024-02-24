// src/weather.js

const axios = require('axios');
require('dotenv').config();

async function getWeather(apiKey, location, day) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`);
        const selectedDayWeather = response.data.forecast.forecastday.find(item => item.date === day);
        return selectedDayWeather;
    } catch (error) {
        throw new Error('Error fetching weather data:', error);
    }
}

module.exports = { getWeather };
