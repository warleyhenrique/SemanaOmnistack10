const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get("/devs/:github_username", DevController.show);
//routes.get('/devs/:username', DevController.show);

routes.get('/search', SearchController.index);


module.exports = routes;