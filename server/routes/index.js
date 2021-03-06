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
  app.get("/api/posts/:id", [keystone.middleware.api, keystone.middleware.cors], routes.api.posts.get);
  app.get("/api/posts/", [keystone.middleware.api, keystone.middleware.cors], routes.api.posts.list);
  app.get("/", function(req, res) {
    res.redirect("/keystone");
  });
};
