var keystone = require("keystone");
var Post = keystone.list("Post");

/**
 * List Posts
 * @returns {JSON}
 */
exports.list = function(req, res) {
  Post.model
    .find(function(err, items) {
      if (err) return res.apiError("database error", err);
      res.apiResponse({
        posts: items
      });
    })
    .limit(Number(req.query.limit));
};

/**
 * Get Post by ID
 * @param {Number} req.params.id The id to query
 * @returns {JSON}
 */
exports.get = function(req, res) {
  Post.model.findById(req.params.id, (err, item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(400).send(err);
    }
  });
};
