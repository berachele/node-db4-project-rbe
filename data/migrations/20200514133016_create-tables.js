
exports.up = function(knex) {
  //order: Recipes, Instructions, Ingredients, Recipe-Ingredients
  return knex.schema
  .createTable("recipes", recipes => {
      recipes.increments()
      recipes.string("recipe_name", 128).notNullable()
  })

  .createTable("instructions", steps => {
      steps.increments()

      steps.integer("recipeID").unsigned().notNullable()
      .references("id")
      .inTable("recipes")

      steps.string("step").notNullable()
      steps.integer("stepID").notNullable()
  })

  .createTable("ingredients", ing => {
      ing.increments()
      ing.varchar("quantity").notNullable()
      ing.string("measurement").notNullable()
      ing.string("ingredient").notNullable()
  })

  .createTable("recipe_ingredients", recIng => {
      recIng.increments()

      recIng.integer("recipeID").unsigned().notNullable()
      .references("id")
      .inTable("recipes")
      
      recIng.integer("ingredientID").unsigned().notNullable()
      .references("id")
      .inTable("ingredients")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("recipes")
};
