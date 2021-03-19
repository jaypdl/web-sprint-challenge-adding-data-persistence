// build your `/api/tasks` router here
const router = require('express').Router()

/***** Base Endpoint: /api/tasks ******/
// [GET] / (Returns all tasks)

// [POST] / (Creates and returns new task)

// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the tasks router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router