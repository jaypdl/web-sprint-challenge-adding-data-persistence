exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'First Project', project_description:'A really good description'},
        {project_name: 'Second Project'},
      ]);
    }
