// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

/***** Base Endpoint: /api/resources ******/
// [GET] / (Returns All Resources)
router.get('/', async (req, res, next) => {
  try {
    const allResources = await Resource.getAll()
    res.json(allResources)
  } catch (err) {
    next(err)
  }
})

// [POST] / (Creates, and returns new resource)
router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resource.create(req.body)
    res.status(201).json(newResource)
  } catch (err) {
    next(err)
  }
})

// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the resources router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router