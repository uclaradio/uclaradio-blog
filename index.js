var keystone = require("keystone");
var config = require("./config.json");

keystone.init({
  "cookie secret": "secure string goes here",
  name: "uclaradio-blog",
  "user model": "User",
  "auto update": true,
  auth: true,
  static: ["./server/public/js/", "./server/public/img/"],
  mongo: "mongodb://localhost/keystonereactcms",
  "cloudinary config":
    "cloudinary://137349286853277:8caKfJiiAJSLIuFEGzKulHGYxe0@dde0077ih"
});

keystone.import("./server/models");
keystone.set("port", 3010);
keystone.set("routes", require("./server/routes"));

keystone.start();
