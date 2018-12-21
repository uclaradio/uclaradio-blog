var keystone = require("keystone");
var Article = keystone.list("Article");

// Creating the API end point
exports.list = function(req, res) {
  // Querying the data this works similarly to the Mongo db.collection.find() method
  Article.model
    .find(function(err, items) {
      // Make sure we are handling errors
      if (err) return res.apiError("database error", err);
      res.apiResponse({
        // Filter articles by
        articles: items
      });
      // Using express req.query we can limit the number of articles returned by setting a limit property in the link
      // This is handy if we want to speed up loading times once our articles collection grows
    })
    .limit(Number(req.query.limit));
};

exports.getById = function(req, res) {
  Article.model.findById(req.params.id, (err, item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(400).send(err);
    }
  });
};
