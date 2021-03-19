// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

/***** Base Endpoint: /api/projects ******/
// [GET] / (Returns all projects)
router.get('/', async (req, res, next) => {
  try {
    const allProjects = await Project.getAll()
    res.json(allProjects)
  } catch (err) {
    next(err)
  }
})

// [POST] / (Creates new project and returns)
router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body)
    res.status(201).json(newProject)
  } catch (err) {
    next(err)
  }
})

/*****!!!! Stretch Endpoints !!!!*****/
// [GET] /:id/resources (Returns all resources assigned to project)
router.get('/:id/resources', async (req, res, next) => {
  try {
    const projResources = await Project.getResources(req.params.id)
    res.json(projResources)
  } catch (err) {
    next(err)
  }
})


// Error catching
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `Something went wrong with your ${req.method} request in the projects router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router