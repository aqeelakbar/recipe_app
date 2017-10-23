# Recipe search

An example of displaying recipes using server side rendering.
Uses express to deliver the data, pug (previously known as jade, changed due to licencing issues) for templating.
Styling shamelessly lifted from Auntie Beeb.

**So far...**
- Displays list of recipes
- Click on a recipe takes you to a single page
- Search through recipe lists (if number of recipes exceed 6 - starting off small)
- Returns search results based on searching on ingredients.
- Handle measurements for 2 recipes (see Lemon Chicken and Tenderloin)

**Things to do:**
- If a user lands on a recipe list page via search results, a back button should be present
- If a user user lands on a recipe list page via search results, previous and next result should be displayed.
- Handle prepositions (see TODO in code)
- Instant filtering via name, ingredients and cooking time. 
- Pagination
- Star recipes

**Reference:**
- Jade (now called Pug): https://naltatis.github.io/jade-syntax-docs/
- Express: https://expressjs.com/en/guide/routing.html
- BBC Food for design inspiration and lifting the stylesheets: http://www.bbc.co.uk/food/

**Would like to do:**
- isomorphic progressive app (offline mode)
- https://blog.jayway.com/2016/05/23/6-reasons-isomorphic-web-apps-not-silver-bullet-youre-looking/
- https://developers.google.com/web/ilt/pwa/introduction-to-progressive-web-app-architectures
- set up testing

**Issues**
No known issues as of yet.

To run `npm install`
and then
`npm start`
