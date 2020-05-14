
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Cranberry Chicken'},
        {recipe_name: 'Crockpot Chicken and Gravy with Stuffing'},
        {recipe_name: 'German Pancakes'}
      ]);
    });
};

/*
DATA INCLUDES

-Recipe Name

 */