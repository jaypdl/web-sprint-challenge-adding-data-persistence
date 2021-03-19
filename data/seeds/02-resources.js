exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'First Resource', resource_description:'A really good description of this resource'},
    {resource_name: 'Second Resource', resource_description:'This is a resource'},
    {resource_name: 'Third Resource', resource_description:'Best Resource Ever'},
  ]);
}