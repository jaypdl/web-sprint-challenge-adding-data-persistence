// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
  const allProjects = await db('projects')
  return allProjects.map(proj => {
    return {
      ...proj,
      project_completed: proj.project_completed ? true : false
    }
  })
}

const getByID = async (id) => {
  const project = await db('projects').where('project_id', id).first()
  return {
    ...project,
    project_completed: project.project_completed === 1 ? true : false
  }
}

const create = async (newEntry) => {
  const processedEntry = {
    ...newEntry,
    project_completed: newEntry.project_completed === true ? 1 : 0
  }
  const id = await db('projects').insert(processedEntry)
  return getByID(id)
}

module.exports = {
  getAll,
  getByID,
  create,
}