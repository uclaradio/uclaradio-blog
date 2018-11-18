var keystone = require("keystone");

keystone.init({
  "cookie secret": "secure string goes here",
  name: "uclaradio-blog",
  "user model": "User",
  "auto update": true,
  auth: true,
  views: "templates/views",
  "view engine": "pug",
  static: [],
  mongo: "mongodb://localhost/keystonereactcms"
});
keystone.import("./server/models");
keystone.set("routes", require("./routes"));
keystone.start();
