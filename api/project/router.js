// build your `/api/projects` router here
const router = require('express').Router()


// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the projects router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router