var keystone = require("keystone");
var User = keystone.list("User");

exports = module.exports = function(done) {
  new User.model({
    name: { first: "author1", last: "user" },
    email: "author1@keystonejs.com",
    password: "admin",
    canAccessKeystone: true
  }).save(done);
};
