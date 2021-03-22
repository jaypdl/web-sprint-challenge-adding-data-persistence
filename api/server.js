// build your server here and require it from index.js
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// Routers
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

// Middlewares
server.use(helmet())
server.use(express.json())
server.use(cors())

// Routes
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

// Other Endpoints
server.get('/', (req, res) => {
  res.send('The server is listening')
})

server.use('*', (req, res) => {
  res.status(404).json({ message: `Sorry, this url is not a valid enpoint for a ${req.method} request`})
})


module.exports = server