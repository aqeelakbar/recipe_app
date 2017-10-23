module.exports = {
  handleJSON:function(json) {
    return json.recipes.slice(0, 10);
  },
  searchRecipes:function(json, keywords){
    let results = [],
        numKeywords = keywords.length,
        numRecipes = json.recipes.length,
        recipes = json.recipes;

    // for(var i = 0; i < numRecipes; i++){
    //   for(var j = 0, numIngredients = recipes[i].mainIngredients.length; j < numIngredients; j++) {
    //     for(var k = 0; k < numKeywords; k++) {
    //       if(keywords[k].toLowerCase() == json.recipes[i].mainIngredients[j].toLowerCase()) {
    //         results.push(json.recipes[i]);
    //       }
    //     }
    //   }
    // }
    recipes.map(function(recipe){
      recipe.mainIngredients.map(function(ingredient) {
        keywords.map(function(keyword){
          if(keyword.toLowerCase() == ingredient.toLowerCase()) {
            results.push(recipe);
          }
        })
      })
    })
    return results;
    // #TODO Think of a better way to present the above.
  },
  singleRecipe:function(json, title) {
    for(var i = 0, numRecipes = json.recipes.length; i < numRecipes; i++){
      if(json.recipes[i].name == title){
        return json.recipes[i];
      }
    }
  },
  queryHandler:function(query) {
    return query.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(query) { return query.toUpperCase()});

    // #TODO handle words like and, with etc
  }
}
