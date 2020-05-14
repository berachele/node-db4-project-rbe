
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {quantity: 6-8, measurement: '', ingredient: "Boneless Chicken breasts"},
        {quantity: 1/2, measurement: 'cup', ingredient: "water"},
        {quantity: 2, measurement: 'envelopes', ingredient: "Lipton Onion Soup"},
        {quantity: 1, measurement: 'bottle', ingredient: "French Salad Dressing"},
        {quantity: 2, measurement: 'cans', ingredient: "Cranberries (or cranberry sauce)"},
        {quantity: 4, measurement: '', ingredient: "Boneless Chicken breasts"},
        {quantity: 1, measurement: 'cup', ingredient: "Chicken Broth"},
        {quantity: 1, measurement: 'can', ingredient: "Cream of Chicken soup"},
        {quantity: 1, measurement: 'can', ingredient: "Cream of Mushroom soup"},
        {quantity: 1/4, measurement: 'cup', ingredient: "milk"},
        {quantity: 2, measurement: 'cups', ingredient: "Pepperidge Farm Herb Stuffin"},
        {quantity: 1/2, measurement: 'cup', ingredient: "butter, melted"},
        {quantity: 3, measurement: '', ingredient: "eggs"},
        {quantity: 1/2, measurement: 'cup', ingredient: "milk"},
        {quantity: 1/2, measurement: 'flour', ingredient: "flour"},
        {quantity: 1/4, measurement: 'salt', ingredient: "salt"},
        {quantity: 3, measurement: 'tablespoons', ingredient: "butter, melted"},
      ]);
    });
};

/*
DATA INCLUDES

--Quantity
--Measurement
--Ingredient

 */