var keystone = require("keystone");
var config = require("./config.json");

keystone.init({
  "cookie secret": "secure string goes here",
  name: "uclaradio-blog",
  "user model": "User",
  "auto update": true,
  auth: true,

  static: ["./server/public/js/", "./server/public/img/"],
  mongo: `mongodb://${config.DB_USER}:${
    config.DB_PASSWORD
  }@ds141924.mlab.com:41924/uclaradio-blog`
});

keystone.import("./server/models");
keystone.set("port", 3010);
keystone.set("routes", require("./server/routes"));
keystone.start();
