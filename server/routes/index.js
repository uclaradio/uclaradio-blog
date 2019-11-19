var keystone = require("keystone");
// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
  api: importRoutes("./api")
};

// Export our app routes
exports = module.exports = function(app) {
    // Get access to the API route in our app
    app.get("/api/posts/:id", keystone.middleware.api, routes.api.posts.get);
    app.get("/api/posts/", keystone.middleware.api, routes.api.posts.list);
    app.all("/api/photos/create", keystone.middleware.api, routes.api.photos.create);
    app.get("/api/photos/list", keystone.middleware.api, routes.api.photos.list);
    app.get("/api/photos/:id", keystone.middleware.api, routes.api.photos.get);
    app.all("/api/photos/:id/update", keystone.middleware.api, routes.api.photos.update);
    app.get("/api/photos/:id/remove", keystone.middleware.api, routes.api.photos.remove);
    app.get("/", function(req, res) {
	res.redirect("/keystone");
    });
};
