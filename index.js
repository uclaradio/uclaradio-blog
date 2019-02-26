var keystone = require("keystone");

if (keystone.get("env") == "production") {
  console.log("wassup");
  keystone.init({
    "cookie secret": "secure string goes here",
    name: "uclaradio-blog",
    "user model": "User",
    "auto update": true,
    auth: true,
    static: ["./server/public/js/", "./server/public/img/"],
    // mongo: process.env.MONGODB_URI,
    "cloudinary config": process.env.CLOUDINARY_URL
  });
  keystone.set("port", process.env.PORT);
} else {
  var config = require("./config.json");
  keystone.init({
    "cookie secret": "secure string goes here",
    name: "uclaradio-blog",
    "user model": "User",
    "auto update": true,
    auth: true,
    static: ["./server/public/js/", "./server/public/img/"],
    mongo: "mongodb://localhost/keystonereactcms",
    "cloudinary config": `cloudinary://${config.CLOUD_API_KEY}:${
      config.CLOUD_API_SECRET
    }@${config.CLOUD_NAME}`
  });
  keystone.set("port", 3010);
}

keystone.import("./server/models");
keystone.set("port", 3010);
keystone.set("routes", require("./server/routes"));

keystone.start();
