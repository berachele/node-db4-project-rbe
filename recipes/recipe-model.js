const db = require('../data/dbConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    /*
    select distinct RI.recipeID, r.recipe_name, i.quantity, i.measurement, i.ingredient
    from recipe_ingredients as RI 
    join recipes as r on R.id = RI.recipeID
    join ingredients as i on RI.ingredientID = i.id
    where r.id = 1;
    */
    return db.select("RI.recipeID", "i.quantity", "i.measurement", "i.ingredient")
    .from("recipe_ingredients")
    .join("recipes as r", "r.id", "=", "RI.recipeID")
    .join("ingredients as i", "i.id", "=", "RI.ingredientID")
    .where({recipeID: id})
}

function getInstructions(id) {
    /*
    select distinct r.id, r.recipe_name, i.stepID, i.step
    from recipes as r
    join instructions as i on r.id = i.recipeID
    where r.id = 1;
    */
   return db.select("r.recipe_name", "i.stepID", "i.step")
   .from("recipes as r")
   .join("instructions as i", "r.id", "=", "i.recipeID")
   .where({recipeID: id})
}