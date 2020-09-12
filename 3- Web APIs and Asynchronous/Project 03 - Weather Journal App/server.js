// Setup empty JS object to act as endpoint for all routes
let projectData = []
let newEntry = {}

// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware */
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'))

// Setup Server
const port = 8888
const server = app.listen(port, listening)

// Call back to debug
function listening () {
  console.log('Server running!')
  console.log(`Running on localhost: ${port}`)
}

// GET route
app.get('/all', getData)

function getData (req, res) {
  res.send(projectData)
  console.log(projectData)
}

// POST route
app.post('/weatherInfo', addWeatherInfo)

function addWeatherInfo (req, res) {
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }

  projectData.push(newEntry)
  res.send(projectData)
  console.log(projectData)
}
