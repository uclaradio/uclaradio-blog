var keystone = require("keystone");
var Image = keystone.list("Image");

/**
 * List Images
 * @returns {JSON}
 */
exports.list = function(req, res) {
    Image.model
	.find(function(err, items) {
	    if (err) return res.apiError("database error listing images", err);
	    res.apiResponse({
		images: items
	    });
	})
	.limit(Number(req.query.limit));
};

/**
 * Get Image by ID
 * @param {Number} req.params.id The id to query
 * @returns {JSON}
 */
exports.get = function(req, res) {
    Image.model.findById(req.params.id, (err, item) => {
	if (item) {
	    res.json(item);
	} else {
	    res.status(400).send(err);
	}
    });
};
