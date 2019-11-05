var keystone = require("keystone");
var Photo = keystone.list("Photo");

/**
 * List Photos
 * @returns {JSON}
 */
exports.list = function(req, res) {
    Photo.model
	.find(function(err, items) {
	    if (err) return res.apiError("database error listing photos", err);
	    res.apiResponse({
		photos: items
	    });
	})
	.limit(Number(req.query.limit));
};

/**
 * Get Photo by ID
 * @param {Number} req.params.id The id to query
 * @returns {JSON}
 */
exports.get = function(req, res) {
    Photo.model.findById(req.params.id, (err, item) => {
	if (item) {
	    res.json(item);
	} else {
	    res.status(400).send(err);
	}
    });
};
