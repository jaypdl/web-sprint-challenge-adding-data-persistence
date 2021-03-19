// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

/***** Base Endpoint: /api/tasks ******/
// [GET] / (Returns all tasks)
router.get('/', async (req, res, next) => {
  try {
    const allTasks = await Task.getAll()
    res.json(allTasks)
  } catch (err) {
    next(err)
  }
})

// [POST] / (Creates and returns new task)
router.post('/', async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body)
    res.status(201).json(newTask)
  } catch (err) {
    next(err)
  }
})

// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the tasks router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router