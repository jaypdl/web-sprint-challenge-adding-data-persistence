// build your `/api/resources` router here
const router = require('express').Router()

/***** Base Endpoint: /api/resources ******/
// [GET] / (Returns All Resources)

// [POST] / (Creates, and returns new resource)

// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the resources router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router