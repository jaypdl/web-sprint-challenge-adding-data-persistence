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
    project_completed: project.project_completed ? true : false
  }
}

const create = async (newEntry) => {
  const processedEntry = {
    ...newEntry,
    project_completed: newEntry.project_completed ? 1 : 0
  }
  const id = await db('projects').insert(processedEntry)
  return getByID(id)
}

/*****!!!! Models for Stretch Endpoints !!!!*****/
const getResources = (id) => {
  return db('project_resources as pr')
    .join('resources as r','pr.resource_id','r.resource_id')
    .select('r.*').where('pr.project_id', id)
}

module.exports = {
  getAll,
  getByID,
  create,
  getResources
}