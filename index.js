var keystone = require("keystone");

keystone.init({
  "cookie secret": "secure string goes here",
  name: "uclaradio-blog",
  "user model": "User",
  "auto update": true,
  auth: true,

  static: ["./server/public/js/", "./server/public/img/"],
  mongo: "mongodb://localhost/keystonereactcms"
});

keystone.import("./server/models");
keystone.set("port", 3010);
keystone.set("routes", require("./server/routes"));
keystone.start();
