exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'First Task', task_notes:'Write Tasks', project_id:1},
    {task_description: 'Code', task_notes:'Write More Tasks', project_id:1},
    {task_description: 'Task for project 2', task_notes:'I write notes!', project_id:2},
  ]);
}