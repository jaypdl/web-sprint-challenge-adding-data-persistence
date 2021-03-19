// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
  const allTasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
  return allTasks.map(task => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false
    }
  })
}

const getByID = async (id) => {
  const task = await db('tasks').where('task_id', id).first()
  return {
    ...task,
    task_completed: task.task_completed ? true : false
  }
}

const create = async (newEntry) => {
  const processedEntry = {
    ...newEntry,
    task_completed: newEntry.task_completed ? 1 : 0
  }
  const id = await db('tasks').insert(processedEntry)
  return getByID(id)
}

module.exports = {
  getAll,
  getByID,
  create,
}