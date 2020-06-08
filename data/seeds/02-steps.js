
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        //1. Cranberry Chicken
        {recipeID: 1, stepID: 1, step: 'Combine water with soup envelopes in medium pot. Bring to boil, continually stirring.'},
        {recipeID: 1, stepID: 2, step: 'Once boiling, turn off heat. Add cranberry sauce and salad dressing. Mix well and put aside.'},
        {recipeID: 1, stepID: 3, step: 'In 9x13 casserole dish, place chicken breats evenly apart. Pour sauce over to cover the chicken. Cover casserole dish with seran wrap or lid and place in fridge to marinate for at least 4 hours (24 is best).'},
        {recipeID: 1, stepID: 4, step: 'When ready to cook, preheat oven to 375° F. Cook for about 45 minutes or until chicken is just reaching 165° F. (Cook time depends on chicken thickness)'},
        //2. Crockpot Chicken and Gravy with Stuffing
        {recipeID: 2, stepID: 1, step: 'Season chicken breasts with salt and pepper and place chicken breasts in crock pot. Pour Chicken broth over breasts.'},
        {recipeID: 2, stepID: 2, step: 'Combine both cans of soup and milk. Cover chicken breasts with soup mixture. Sprinkle stuffing mix over all.'},
        {recipeID: 2, stepID: 3, step: 'Drizzle melted butter on top. Cook on low for 6 hours or high for 3.'},
        //3. German Pancakes
        {recipeID: 3, stepID: 1, step: 'Mix eggs, milk, flour and salt in a blender (can use hand blender).'},
        {recipeID: 3, stepID: 2, step: 'Melt butter and place in a 9x13 casserole dish. Make sure it covers the entire base of the pan. Pour in mixture.'},
        {recipeID: 3, stepID: 3, step: 'Place in oven that has been preheated to 450° and let cook for 16-20 minutes.'}
      ]);
    });
};

/*
DATA INCLUDES

--RecipeID
--StepID
--Step

 */