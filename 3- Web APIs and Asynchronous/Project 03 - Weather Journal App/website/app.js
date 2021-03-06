/* Global Variables */

// Define base URL and API key for the Weather App
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=2811e8a313297e9b8318cdfb32fbd223'
const units = '&units=metric'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear()

// GET request to the Weather Info API
document.getElementById('generate').addEventListener('click', performAction)

function performAction (e) {
  const zipCode = document.getElementById('zip').value
  const feeling = document.getElementById('feelings').value
  if (!zipCode) {
    alert('Zip code is empty! Please introduce a value!')
  } else {
    getWeatherInfo(baseURL, zipCode, apiKey, units)
      .then(function (data) {
      // Add data to POST request
        postData('/weatherInfo', {
          date: newDate,
          city: data.name,
          temp: data.main.temp,
          content: feeling
        })
          .then(
            updateUI()
          )
      })
  }
}

// Async POST
const postData = async (url = '', data = {}) => {
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })

  try {
    const newData = await response.json()
    return newData
  } catch (error) {
    console.log('Error occurred! ', error)
  }
}

// Get Weather Info from the API
const getWeatherInfo = async (baseURL, zipCode, key, units) => {
  const res = await fetch (baseURL + zipCode + key + units)
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('Error occurred! ', error)
  }
}

// Update UI with the information retrieved from the API
const updateUI = async () => {
  const request = await fetch ('/database')

  try {
    const allData = await request.json()
    document.getElementById('date').innerHTML = 'Date: ' + allData[allData.length - 1].date
    document.getElementById('city').innerHTML = 'City: ' + allData[allData.length - 1].city
    document.getElementById('temp').innerHTML = 'Temperature: ' + allData[allData.length - 1].temp + ' ºC'
    document.getElementById('content').innerHTML = 'Feeling: ' + allData[allData.length - 1].content
  } catch (error) {
    console.log('Error occurred! ', error)
  }
}

window.onload = () => {
  updateUI()
}
