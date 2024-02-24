
# Weather Library

Welcome to the Weather Library! This library provides a simple way to fetch weather data for a specific day using the WeatherAPI.

# Installation

You can install the Weather Library via npm:

```bash
npm install weather-lib
```
Please note that you need to have Node.js installed on your machine to use this library.

# Usage
To use the Weather Library in your Node.js project, follow these steps:

## Import the Library:
Import the getWeather function from the weather-lib module into your project.

```bash
const { getWeather } = require('weather-lib');
```
## Set Up API Key and Location:
Obtain an API key from WeatherAPI (https://www.weatherapi.com/) and specify the location for which you want to fetch weather data.

```bash
const apiKey = 'your_api_key_here';
const location = 'New York'; // Example: 'New York'
```

## Specify the Day:
Choose the specific day for which you want to fetch weather data in the format YYYY-MM-DD.

```bash
const day = '2024-02-25'; // Example: '2024-02-25'
```
## Fetch Weather Data:
Call the getWeather function with the API key, location, and selected day as parameters.

```bash
getWeather(apiKey, location, day)
    .then(weather => console.log(weather))
    .catch(error => console.error(error));
```
This function returns a Promise that resolves with the weather data for the specified day or rejects with an error if there's any issue with the request.

# Example
Here's an example of how you can use the Weather Library in your project:


```bash
const { getWeather } = require('weather-lib');

const apiKey = 'your_api_key_here';
const location = 'New York';
const day = '2024-02-25';

getWeather(apiKey, location, day)
    .then(weather => console.log(weather))
    .catch(error => console.error(error));
```
Replace 'your_api_key_here' with your actual WeatherAPI key.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Support
If you encounter any issues or have questions about using the Weather Library, please open an issue on GitHub.
```bash
Replace `'your_api_key_here'` with your actual API key. Additionally, ensure that you hav
```