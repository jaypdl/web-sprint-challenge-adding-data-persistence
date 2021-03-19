// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  return db('resources')
}

const getByID = (id) => {
  return db('resources').where('resource_id', id).first()
}

const create = async (newEntry) => {
  const id = await db('resources').insert(newEntry)
  return getByID(id)
}

module.exports = {
  getAll,
  getByID,
  create,
}