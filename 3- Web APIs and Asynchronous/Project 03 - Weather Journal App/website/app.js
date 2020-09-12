/* Global Variables */

// Define base URL and API key for the Weather App
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=2811e8a313297e9b8318cdfb32fbd223'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()

// GET request to the Weather Info API
document.getElementById('generate').addEventListener('click', performAction)

function performAction (e) {
  const zipCode = document.getElementById('zip').value
  const feeling = document.getElementById('feelings').value
  getWeatherInfo(baseURL, zipCode, apiKey)
    .then(function (data) {
    // Add data to POST request
      postData('/weatherInfo', { date: newDate, temp: data.main.temp, content: feeling })
    })
    .then(
      updateUI()
    )
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
const getWeatherInfo = async (baseURL, zipCode, key) => {
  const res = await fetch (baseURL + zipCode + key)
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
  const request = await fetch ('/all')
  try {
    const allData = await request.json()
    console.log(`All data received: ${allData[allData.length - 1].date}`)
    document.getElementById('date').innerHTML = allData[allData.length - 1].date
    document.getElementById('temp').innerHTML = allData[allData.length - 1].temp
    document.getElementById('content').innerHTML = allData[allData.length - 1].content
  } catch (error) {
    console.log('Error occurred! ', error)
  }
}
