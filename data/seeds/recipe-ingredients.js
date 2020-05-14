
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredientID: 1, recipeID: 1},
        {ingredientID: 2, recipeID: 1},
        {ingredientID: 3, recipeID: 1},
        {ingredientID: 4, recipeID: 1},
        {ingredientID: 5, recipeID: 1},
        {ingredientID: 6, recipeID: 2},
        {ingredientID: 7, recipeID: 2},
        {ingredientID: 8, recipeID: 2},
        {ingredientID: 9, recipeID: 2},
        {ingredientID: 10, recipeID: 2},
        {ingredientID: 11, recipeID: 2},
        {ingredientID: 12, recipeID: 2},
        {ingredientID: 13, recipeID: 3},
        {ingredientID: 14, recipeID: 3},
        {ingredientID: 15, recipeID: 3},
        {ingredientID: 16, recipeID: 3},
        {ingredientID: 17, recipeID: 3},
      ]);
    });
};

/*
DATA INCLUDES

--RecipeID
--IngredientID

 */