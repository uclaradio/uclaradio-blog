var async = require('async'),
keystone = require("keystone");
var exec = require('child_process').exec;

var Photo = keystone.list("Photo");

/**
 * List Photos
 * @returns {JSON}
 */
exports.list = function(req, res) {
    Photo.model.find(function(err, items) {
	    if (err) return res.apiError("database error listing photos", err);
	    res.apiResponse({
		collections: items
	    });
    });
};

/**
 * Get Photo by ID
 * @param {Number} req.params.id The id to query
 * @returns {JSON}
 */
exports.get = function(req, res) {
    Photo.model.findById(req.params.id).exec(function(err, item) {
	if (err) return res.apiError('databse error', err);
	if (!item) return res.apiError('not found');

	res.apiResponse({
	    collection: item
	});
    });
};

/**
  * Update Photo by ID
  */
exports.update = function(req, res) {
    Photo.model.findById(req.params.id).exec(function(err, item) {
	if (err) return res.apiError('database error', err);
	if (!item) return res.apiError('not found');

	var data = (req.method == 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {
	    if (err) return res.apiError('create error', err);

	    res.apiResponse({
		collection: item
	    });
	});
    });
};

/**
 * Upload a New Photo
 */
exports.create = function(req, res) {

    var item = new Photo.model(),
	data = (req.method == 'POST') ? req.body : req.query;

    item.getUpdateHandler(req).process(req.files, function(err) {

	if (err) return res.apiError('error', err);

	res.apiResponse({
	    file_upload: item
	});
    });
};

/**
 * Delete Photo by ID
 */
exports.remove = function(req, res) {
    var fileId = req.params.id;
    Photo.model.findById(req.params.id).exec(function (err, item) {

	if (err) return res.apiError('database error', err);

	if (!item) return res.apiError('not found');

	item.remove(function (err) {
	    if (err) return res.apiError('database error', err);

	    //Delete the photo
	    exec('rm public/img/'+fileID+'.*', function(err, stdout, stderr) {
		if (err) {
		    console.log('child process exited with error code ' + err.code);
		    return;
		}
		console.log(stdout);
	    });

	    return res.apiResponse({
		success: true
	    });
	});
    });
};
