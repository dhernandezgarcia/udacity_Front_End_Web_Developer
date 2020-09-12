/* Global Variables */

// Define base URL and API key for the Weather App
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=2811e8a313297e9b8318cdfb32fbd223'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()

// GET request to the Weather Info API
document.getElementById('generate').addEventListener('click', performAction)

function performAction(e) {
  const zipCode = document.getElementById('zip').value
  getWeatherInfo(baseURL, zipCode, apiKey)
}

const getWeatherInfo = async (baseURL, zipCode, key) => {
  const res = await fetch(baseURL + zipCode + key)
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('Error occurred! ', error)
  }
}
