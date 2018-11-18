var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api'),
};

exports = module.exports = function (app) {
    app.get('/', routes.views.index)
    app.get('/add-event', routes.views.addEvent)
    app.post('/api/event', routes.api.event.post)
};
