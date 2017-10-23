const	EXPRESS = require('express'),
			PATH = require('path'),
			JSON = require('./lib/recipes.json'),
			UTILS = require('./lib/helper.js');

var app = EXPRESS();

app.set('views', PATH.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(EXPRESS.static(PATH.join(__dirname, 'public')));

app.get('/', function(req, res){
	let recipes = UTILS.handleJSON(JSON);
	res.render('index',{title: 'Search Recipes', json: recipes, number: JSON.recipes.length});
});

app.get('/recipe', function(req, res){
	let recipe;
	res.render('recipe',{json: recipe});
});

app.get('/recipe/:recipeId', function(req, res){
	let recipe;
	if(req.params.recipeId){
		let id = UTILS.queryHandler(req.params.recipeId);
		recipe = UTILS.singleRecipe(JSON, id);
	}
	res.render('recipe',{json: recipe});
});

app.get('/search', function(req, res){
	let search = req.query.keywords.split(' ');
	let recipe = UTILS.searchRecipes(JSON, search);
	res.render('search',{json: recipe, term: req.query.keywords});
});

app.listen(8080);
console.log('Server is running on port 8080...');
