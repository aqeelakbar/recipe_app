const	EXPRESS = require('express'),
			PATH = require('path'),
			UTILS = require('./lib/helper.js'),
			JSON = require('./lib/recipes.json');

let app = EXPRESS();

app.set('views', PATH.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(EXPRESS.static(PATH.join(__dirname, 'public')));

app.get('/', function(req, res){
	let recipes;
	if(req.query.keywords) {
			let search = req.query.keywords.split(' ');
			recipes = UTILS.searchRecipes(JSON, search);
	} else {
			recipes = UTILS.handleJSON(JSON);
	}
	res.render('index',{title: 'Search Recipes', json: recipes, number: JSON.recipes.length, search: req.query.keywords});
});

app.get('/recipe/:recipeId', function(req, res){
	let recipe;
	if(req.params.recipeId){
		let id = UTILS.queryHandler(req.params.recipeId);
		recipe = UTILS.singleRecipe(JSON, id);
	}
	res.render('recipe',{json: recipe});
});

app.listen(8080);
console.log('Server is running on port 8080...');
